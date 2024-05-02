"use server";

import { createClient } from "@/lib/supabase/server";
import { getGalleryImageUrlFromName } from "./utils";

export const getEvents = async () => {
  const supabase = createClient();
  const { data: events, error } = await supabase.from("events").select();
  if (error) throw error;
  return events;
};

export const getEventCoverImage = async (eventId: string) => {
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
    .single();
  if (error) throw error;
  return data;
};
