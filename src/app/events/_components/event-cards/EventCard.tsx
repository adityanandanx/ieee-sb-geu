import Link from "next/link";
import React, { HTMLProps } from "react";
import { Database } from "../../../../../schema.gen";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  FadeInCard,
} from "@/components/ui/card";
import Image from "next/image";
import { getGalleryImageUrlFromName } from "../../utils";
import { ImageIcon } from "lucide-react";
import { cn, formatTimeStamp } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  event: Database["public"]["Tables"]["events"]["Row"];
};

export const EventCard = ({ event }: Props) => {
  return (
    <Link href={`/events/${event.id}`} className="max-w-md w-full">
      <FadeInCard className="group z-0 relative overflow-hidden h-full">
        <div className="relative -z-10 flex items-center justify-center aspect-video overflow-hidden">
          {event.cover_image_url ? (
            <Image
              width={512}
              height={512}
              unoptimized
              // src={""}
              src={getGalleryImageUrlFromName(event.id, event.cover_image_url)}
              className="object-cover group-hover:scale-110 transition-transform h-full w-full -z-20"
              alt={event.title + "image"}
            />
          ) : (
            <ImageIcon className="-z-10 object-cover group-hover:scale-110 transition-transform" />
          )}
        </div>
        <CardHeader className="z-50">
          <CardTitle>{event.title}</CardTitle>
          <CardDescription>
            On: {formatTimeStamp(event.event_start)}
          </CardDescription>
        </CardHeader>
        <CardContent className="h-32">
          <p className="text-sm line-clamp-4">{event.desc}</p>
        </CardContent>
      </FadeInCard>
    </Link>
  );
};

export const EventCardSkeleton = ({
  className,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <Skeleton className={cn("w-full h-[432px] p-10", className)} {...props} />
  );
};
