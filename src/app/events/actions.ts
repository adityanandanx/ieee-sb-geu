import { createClient } from "@/lib/supabase/client";
import { getGalleryImageUrlFromName } from "./utils";
import { EventsColumn } from "@/lib/supabase/db";

export const getEvents = async (count?: number) => {
  const supabase = createClient();
  if (count) {
    const { data: events, error } = await supabase
      .from("events")
      .select()
      .limit(count)
      .eq("published", true)
      .order("event_start", { ascending: false });
    if (error) throw error;
    return events;
  } else {
    const { data: events, error } = await supabase
      .from("events")
      .select()
      .eq("published", true)
      .order("event_start", { ascending: false });
    if (error) throw error;
    return events;
  }
};

export const getEventCoverImage = async (eventId: number) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("events")
    .select("cover_image_url")
    .eq("id", eventId)
    .single();
  if (error) throw error;
  if (!data.cover_image_url) return null;
  const publicUrl = getGalleryImageUrlFromName(eventId, data.cover_image_url);
  return publicUrl;
};

export const getEvent = async (eventId: number) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("events")
    .select()
    .eq("id", eventId)
    .maybeSingle();
  if (error) throw error;
  return data;
};

export const getEventsPaginated = async (
  page: number,
  limit = 10,
  onlyPublished: boolean = false
) => {
  const supabase = createClient();
  if (onlyPublished) {
    const { data, error } = await supabase
      .from("events")
      .select()
      .eq("published", onlyPublished)
      .range(page * limit, page * limit + limit - 1)
      .order("registration_end", { ascending: true, nullsFirst: false });
    if (error) throw error;
    return data;
  }
  const { data, error } = await supabase
    .from("events")
    .select()
    .range(page * limit, page * limit + limit - 1)
    .order("registration_end", { ascending: true, nullsFirst: false });
  if (error) throw error;

  return data;
};

export const searchEvents = async (
  term: string,
  column: Exclude<EventsColumn, "tags"> = "title",
  page: number = 0,
  limit = 10
) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("events")
    .select()
    .ilike(column, `%${term}%`)
    .range(page * limit, page * limit + limit - 1)
    .order("registration_end", { ascending: true, nullsFirst: false });
  if (error) throw error;
  return data;
};
