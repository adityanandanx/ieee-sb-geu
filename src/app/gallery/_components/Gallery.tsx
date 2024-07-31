"use client";
import React, { Suspense } from "react";
import { GalleryImages } from "./GalleryImages";
import { useEventGallery, useGallery } from "@/lib/hooks/data/event-queries";
import { GallerySkeleton } from "./GallerySkeleton";
import GalleryImageCard from "./GalleryImageCard";

export const Gallery = () => {
  const data = useGallery();
  const imgUrls = data
    .filter((d) => d.status === "success")
    .map((d) => d.data)
    .flat(1);
  const isPending = data.reduce((acc, d) => acc || d.isPending, false);

  return <GalleryImages imgUrls={imgUrls || []} isPending={isPending} />;
};

export const EventGallery = ({ eventId }: { eventId: number }) => {
  const { data, status, isPending } = useEventGallery(eventId);

  if (status === "success")
    return <GalleryImages imgUrls={data} isPending={isPending} />;
  return null;
};
