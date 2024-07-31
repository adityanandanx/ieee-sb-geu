import { createClient } from "@/lib/supabase/client";
import { getEvents } from "../events/actions";

export const getEventGallery = async (eventId: number) => {
  const supabase = createClient();
  const { data, error } = await supabase.storage
    .from("event")
    .list(`${eventId}/gallery/`, {
      sortBy: { column: "name", order: "asc" },
      // offset: 1,
    });
  if (error) throw error;
  const imageURLs: string[] = data.map(
    (d) =>
      supabase.storage
        .from("event")
        .getPublicUrl(`${eventId}/gallery/${d.name}`).data.publicUrl,
  );
  return imageURLs;
};

export const getGallery = async () => {
  const supabase = createClient();
  const urls: string[] = [];
  const { data, error } = await supabase.from("events").select("id");
  if (error) throw error;
  for (const d of data) {
    const u = await getEventGallery(d.id);
    urls.push(...u);
  }
  return urls;
};
