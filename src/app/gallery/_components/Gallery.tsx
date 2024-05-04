import React, { Suspense } from "react";
import { getGallery } from "../actions";
import { GalleryImages } from "./GalleryImages";
import { GallerySkeleton } from "./GallerySkeleton";

export const Gallery = async () => {
  return (
    <Suspense fallback={<GallerySkeleton />}>
      <GalleryWithoutSuspense />
    </Suspense>
  );
};

const GalleryWithoutSuspense = async () => {
  const imgUrls = await getGallery();
  return <GalleryImages imgUrls={imgUrls} />;
};
