import { TeamRow, TeamType } from "@/lib/supabase/db";

export const getMemberAvatar = (name: string) => {
  const publicUrl = `${process.env
    .NEXT_PUBLIC_SUPABASE_URL!}/storage/v1/object/public/team/${name}`;
  return publicUrl;
};

export const groupMembersByTeamType = (members: TeamRow[]) => {
  const result: { [k in TeamType]: TeamRow[] } = {
    core: [],
    tech: [],
    faculty: [],
    "Active Members": [],
  };

  for (const m of members) {
    result[m.teamtype].push(m);
  }

  return result;
};
