"use client";
import { FadeIn } from "@/components/motion";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";

export default function GalleryImageCard({
  url,
  onClick,
}: {
  url: string;
  onClick: () => void;
}) {
  return (
    <FadeIn className="relative z-0" key={url}>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
        <Loader2Icon className="animate-spin" />
      </div>
      <Image
        className="w-auto h-[256px] rounded cursor-pointer object-cover"
        onClick={onClick}
        src={url}
        alt="image"
        width={256}
        height={256}
        quality={50}
      />
    </FadeIn>
  );
}
