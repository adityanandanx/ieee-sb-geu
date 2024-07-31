"use client";
import React, { Suspense } from "react";
import { GalleryImages } from "./GalleryImages";
import { useGallery } from "@/lib/hooks/data/event-queries";

export const Gallery = () => {
  const galleryData = useGallery();

  return <GalleryImages data={galleryData} />;
};
