export const getEventIdFromGalleryImgUrl = (imgUrl: string) => {
  const parts = imgUrl.split("/");
  return parts[8];
};
