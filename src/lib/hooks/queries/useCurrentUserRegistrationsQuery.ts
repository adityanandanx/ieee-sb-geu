import { useQuery } from "@tanstack/react-query";
import { useUserQuery } from ".";
import { EventsRow } from "@/lib/supabase/db";
import { createClient } from "@/lib/supabase/client";

// export default function useCurrentUserRegistrationsQuery() {
//   const supabase = createClient();
//   const { data: user } = useUserQuery();
//   return useQuery({
//     enabled: !!user,
//     queryKey: ["user", "registrations"],
//     queryFn: async () => {
//       if (!user) throw new Error("Cannot get user");
//       const { data, error } = await supabase
//         .from("registrations")
//         .select(
//           `
//         events (
//           *
//         )
//         `
//         )
//         .eq("user_id", user.id);
//       if (error) throw error;
//       const res: EventsRow[] = [];
//       data.forEach((d) => {
//         if (!d.events) return;
//         res.push(d.events);
//       });
//       return res;
//     },
//   });
// }
