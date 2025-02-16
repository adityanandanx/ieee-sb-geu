import { Database } from "@/../schema.gen";
import { SupabaseClient } from "@supabase/supabase-js";

export type EventsRow = Database["public"]["Tables"]["events"]["Row"];
export type EventsColumn = keyof EventsRow;

export type TeamRow = Database["public"]["Tables"]["team"]["Row"];
export type TeamColumn = keyof EventsRow;
export type TeamType = Database["public"]["Enums"]["TeamType"];

export type UsersRow = Database["public"]["Tables"]["users"]["Row"];
export type UsersColumn = keyof UsersRow;
export type UserRole = Database["public"]["Enums"]["UserRole"];

export type TypedSupabaseClient = SupabaseClient<Database>;
