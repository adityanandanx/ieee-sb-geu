"use client";
import React, { Suspense } from "react";
import { getGallery } from "../actions";
import { GalleryImages } from "./GalleryImages";
import { GallerySkeleton } from "./GallerySkeleton";
import { useQuery } from "@tanstack/react-query";

// export const Gallery = () => {
//   return (
//     <Suspense fallback={<GallerySkeleton />}>
//       <GalleryWithoutSuspense />
//     </Suspense>
//   );
// };

export const Gallery = () => {
  const { data, status, error } = useQuery({
    queryKey: ["event", "gallery"],
    queryFn: async () => await getGallery(),
  });

  switch (status) {
    case "error":
      return <>{error.message}</>;
    case "pending":
      return <GallerySkeleton />;
  }

  // const imgUrls = await getGallery();
  return <GalleryImages imgUrls={data} />;
};
