"use client";
import { getEventGallery } from "@/app/gallery/actions";
import { Separator } from "@/components/ui/separator";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import CoverImage from "./CoverImage";
import GalleryImage from "./GalleryImage";
import UploadDropZone from "./UploadDropZone";

type Props = {
  eventId: number;
};

const Gallery = ({ eventId }: Props) => {
  const {
    data: imageURLs,
    isError,
    isPending,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["event", eventId, "gallery"],
    queryFn: () => getEventGallery(eventId),
  });
  // const imageURLs = await getEventGallery(supabase, eventId);
  if (isError) {
    toast.error("An error occurred while fetching gallery", {
      description: error.message,
    });
  }
  if (isPending || isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className="flex-1">
      <CoverImage eventId={eventId} />
      <Separator className="my-10" />
      <h1 className="text-2xl font-medium">Gallery</h1>
      <p className="text-sm">Right click on an image for more options</p>
      {imageURLs?.length === 0 && (
        <div className="text-center p-10">
          No images Found. Try Uploading some.
        </div>
      )}
      <div className="flex flex-wrap flex-row gap-2 py-4">
        {imageURLs?.map((u) => (
          <GalleryImage key={u} eventId={eventId} url={u} />
        ))}
      </div>
      <UploadDropZone eventId={eventId} />
    </div>
  );
};

export default Gallery;
