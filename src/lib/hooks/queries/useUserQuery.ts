import { createClient } from "@/lib/supabase/client";
import { useQuery } from "@tanstack/react-query";

export default function useUserQuery() {
  const supabase = createClient();
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) throw error;
      return user;
    },
  });
}
