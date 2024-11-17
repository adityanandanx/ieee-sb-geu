import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/client";
import { ServerActionResponse } from "@/lib/types/action";
import { EventsRow } from "@/lib/supabase/db";
import { getEventCoverImage } from "@/app/events/actions";

const supabase = createClient();

const updateEvent = async (
  newdata: Partial<EventsRow> & { id: string | number }
) => {
  console.log("UPDATING", newdata);

  const { data, error } = await supabase
    .from("events")
    .update(newdata)
    .eq("id", newdata.id)
    .select("id")
    .single();
  if (error) throw error;
  revalidatePath(`/events/${data.id}`);
  return data.id;
};

const createEvent = async (
  newdata: Omit<EventsRow, "id" | "created_at" | "published" | "owner" | "tags">
) => {
  const { data, error } = await supabase
    .from("events")
    .insert(newdata)
    .select("id")
    .single();

  if (error) throw error;

  return data.id;
};

const deleteEvent = async (id: string) => {
  const { error } = await supabase.from("events").delete().eq("id", id);
  if (error) throw error;
  revalidatePath(`/events/${id}`);
  return;
};

const uploadImageToGallery = async (eventId: number, fdata: FormData) => {
  const file = fdata.get("image")! as File;
  const { data, error } = await supabase.storage
    .from("event")
    .upload(
      `${eventId}/gallery/${file.name.replaceAll(
        " ",
        "_"
      )}_t=${new Date().getMilliseconds()}`,
      file
    );
  // revalidatePath(`/dashboard/e/event/${eventId}`);
  // revalidatePath("/events");
  if (error) throw error;
  // return { error: error?.message };
};

const deleteImageFromGallery = async (eventId: number, imageURL: string) => {
  const imgPath = imageURL.split("event/")[1];
  const coverURL = await getEventCoverImage(eventId);
  if (coverURL === imageURL) {
    setEventCoverImage(eventId, null);
  }
  const { data, error } = await supabase.storage
    .from("event")
    .remove([imgPath]);
  if (error) throw error;
};

const setEventCoverImage = async (
  eventId: number,
  publicUrl: string | null
) => {
  const { error } = await supabase
    .from("events")
    .update({ cover_image_url: publicUrl?.split("/").at(-1) })
    .eq("id", eventId);
  if (error) throw error;
  // revalidatePath(`/dashboard/e/event/${eventId}`);
  // revalidatePath("/events");
};

export {
  updateEvent,
  createEvent,
  deleteEvent,
  setEventCoverImage,
  uploadImageToGallery,
  deleteImageFromGallery,
};
