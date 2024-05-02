"use server";

import { createClient } from "@/lib/supabase/server";
import { getGalleryImageUrlFromName } from "./utils";

export const getEvents = async () => {
  const supabase = createClient();
  const { data: events, error } = await supabase.from("events").select();
  if (error) throw error;
  return events;
};

const getEventCoverImage = async (eventId: string) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("events")
    .select("cover_image_url")
    .eq("id", eventId);
  if (error) throw new Error(error.message);
  if (!data[0].cover_image_url) return null;
  const publicUrl = getGalleryImageUrlFromName(
    eventId,
    data[0].cover_image_url
  );
  return publicUrl;
};
