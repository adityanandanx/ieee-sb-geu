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
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  imgUrls: string[];
};

export const GalleryImages = ({ imgUrls }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  return (
    <>
      <div className="flex flex-wrap items-start justify-stretch gap-5 overflow-hidden">
        {imgUrls.map((url, i) => (
          <FadeIn key={url}>
            <Image
              className="w-auto h-[256px] rounded cursor-pointer object-cover"
              onClick={() => {
                setModalOpen(true);
                setCurrent(i);
              }}
              src={url}
              alt="image"
              width={512}
              height={256}
            />
          </FadeIn>
        ))}
      </div>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="w-full p-0 max-w-screen-lg h-[98vh]">
          <Carousel
            opts={{ startIndex: current, loop: true }}
            className="my-auto"
          >
            <CarouselContent className="">
              {imgUrls.map((url) => (
                <CarouselItem key={url}>
                  <Image
                    className="w-auto h-[98vh] rounded-lg object-contain cursor-pointer mx-auto"
                    src={url}
                    alt="image"
                    width={1080}
                    height={512}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-0 lg:-left-12" />
            <CarouselNext className="-right-0 lg:-right-12" />
          </Carousel>
        </DialogContent>
      </Dialog>
    </>
  );
};
