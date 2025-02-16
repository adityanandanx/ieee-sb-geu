import { getEvents } from "@/app/events/actions";
import { getEventGallery } from "@/app/gallery/actions";
import { createClient } from "@/lib/supabase/client";
import { useQueries, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const supabase = createClient();

export const useEvents = () => {
  return useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const { data, error } = await supabase.from("events").select("*");
      if (error) {
        console.error(error);
        toast.error("Something went wrong");
        throw error;
      }
      return data;
    },
  });
};

export const useGallery = () => {
  const { data } = useEvents();

  return useQueries({
    queries: data
      ? data.map((event) => {
          return {
            queryKey: ["events", event.id, "gallery"],
            queryFn: async () => await getEventGallery(event.id),
          };
        })
      : [],
  });
};

export const useEventGallery = (eventId: number) => {
  return useQuery({
    queryKey: ["events", eventId, "gallery"],
    queryFn: async () => await getEventGallery(eventId),
  });
};
