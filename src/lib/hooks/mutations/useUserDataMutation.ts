import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserQuery } from "../queries";
import { createClient } from "@/lib/supabase/client";
import { UsersRow } from "@/lib/supabase/db";
import { toast } from "sonner";

export default function useUserDataMutation() {
  const supabase = createClient();
  const { data: user, isError, isPending, error: userError } = useUserQuery();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (newValues: Partial<UsersRow>) => {
      if (isError) {
        throw userError;
      }
      if (isPending) {
        throw new Error("Cannot get user data. Try after some time.");
      }
      if (!user) {
        throw new Error("You are not logged in");
      }
      const { data, error, count } = await supabase
        .from("users")
        .update(newValues)
        .eq("id", user.id);
      if (error) throw error;
      return count;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["user", "data"] });
    },
    onError: (error) => {
      console.error(error);
      toast.error("An error occurred", { description: error.message });
    },
  });
}
