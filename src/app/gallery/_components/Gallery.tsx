"use client";
import React, { Suspense, useMemo } from "react";
import { GalleryImages } from "./GalleryImages";
import { useEventGallery, useGallery } from "@/lib/hooks/data/event-queries";
import { GallerySkeleton } from "./GallerySkeleton";
import GalleryImageCard from "./GalleryImageCard";

export const Gallery = () => {
  const data = useGallery();
  // const imgUrls: string[] =

  const imgUrls: string[] = useMemo(() => {
    const result: string[] = [];
    for (const imgs of data) {
      if (!imgs.data) continue;
      for (const img of imgs.data) {
        result.push(img);
      }
    }
    return result;
  }, [data]);

  const isPending = useMemo(
    () => data.reduce((acc, d) => acc || d.isPending, false),
    [data],
  );

  return <GalleryImages imgUrls={imgUrls} isPending={isPending} />;
};

export const EventGallery = ({ eventId }: { eventId: number }) => {
  const { data, status, isPending } = useEventGallery(eventId);

  if (status === "success")
    return <GalleryImages imgUrls={data} isPending={isPending} />;
  return null;
};
