import React, { Suspense } from "react";
import { getGallery } from "../actions";
import { GalleryImages } from "./GalleryImages";
import { GallerySkeleton } from "./GallerySkeleton";

// export const Gallery = () => {
//   return (
//     <Suspense fallback={<GallerySkeleton />}>
//       <GalleryWithoutSuspense />
//     </Suspense>
//   );
// };

export const Gallery = async () => {
  const imgUrls = await getGallery();
  return <GalleryImages imgUrls={imgUrls} />;
};
