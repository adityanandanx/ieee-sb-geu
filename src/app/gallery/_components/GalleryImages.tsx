"use client";
import { FadeIn } from "@/components/motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useGallery } from "@/lib/hooks/data/event-queries";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { GallerySkeleton } from "./GallerySkeleton";

type Props = {
  data: ReturnType<typeof useGallery>;
};

export const GalleryImages = ({ data }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const imgUrls = data
    .filter((d) => d.status === "success")
    .map((d) => d.data)
    .flat(1);
  const isPending = data.reduce((acc, d) => acc || d.isPending, false);

  return (
    <>
      <div className="flex flex-wrap items-start justify-stretch gap-5 overflow-hidden">
        {/* {data.length === 0 && <>No images found</>} */}
        {imgUrls.map((url, i) => (
          <FadeIn className="relative z-0" key={url}>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
              <Loader2Icon className="animate-spin" />
            </div>
            <Image
              className="w-auto h-[256px] rounded cursor-pointer object-cover"
              onClick={() => {
                setModalOpen(true);
                setCurrent(i);
              }}
              src={url}
              alt="image"
              width={256}
              height={256}
              quality={50}
            />
          </FadeIn>
        ))}
        {isPending ? <GallerySkeleton /> : null}
      </div>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="w-full p-0 max-w-screen-lg h-[98vh]">
          <Carousel
            opts={{ startIndex: current, loop: true }}
            className="my-auto"
          >
            <CarouselContent className="">
              {data.map((imgs, i) =>
                imgs.status === "success"
                  ? imgs.data.map((url, j) => (
                      <CarouselItem className="relative z-0" key={url}>
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
                          <Loader2Icon className="animate-spin" />
                        </div>
                        <Image
                          className="w-auto h-[98vh] rounded-lg object-contain mx-auto"
                          src={url}
                          alt="image"
                          width={1080}
                          height={512}
                        />
                      </CarouselItem>
                    ))
                  : null,
              )}
            </CarouselContent>
            <CarouselPrevious className="-left-0 lg:-left-12" />
            <CarouselNext className="-right-0 lg:-right-12" />
          </Carousel>
        </DialogContent>
      </Dialog>
    </>
  );
};
