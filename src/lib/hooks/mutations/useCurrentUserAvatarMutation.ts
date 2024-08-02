import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useUserQuery } from "../queries";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";

export default function useCurrentUserAvatarMutation() {
  const { data: user } = useUserQuery();
  const supabase = createClient();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (avatar: File) => {
      if (!user) {
        throw new Error("User not found.");
      }
      const { data, error } = await supabase.storage
        .from("avatar")
        .upload(`${user.id}/profile`, avatar, { upsert: true });
      if (error) throw error;
      return data.path;
    },
    onSuccess() {
      qc.invalidateQueries({ queryKey: ["user", "avatar"] });
    },
    onError(error) {
      console.error(error);
      toast.error("An Error Occurred.", { description: error.message });
    },
  });
}
