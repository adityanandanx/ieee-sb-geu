"use server";
import { TeamType } from "@/lib/supabase/db";
import { createClient } from "@/lib/supabase/server";

export const getTeam = async (count?: number, teamtype?: TeamType) => {
  const supabase = createClient();
  let query = supabase.from("team").select();

  if (count) {
    query = query.limit(count);
  }
  if (teamtype) {
    query = query.eq("teamtype", teamtype);
  }

  const { data: team, error } = await query
    .order("member_value", { ascending: false })
    .order("fullname");
  if (error) throw error;

  return team;
};
