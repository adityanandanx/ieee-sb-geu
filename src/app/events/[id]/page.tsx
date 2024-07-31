import React, { ReactNode } from "react";
import { getEvent } from "../actions";
import { NavSpacer } from "@/components/shared/nav";
import { Calendar } from "@/components/ui/calendar";
import { Heading, Paragraph } from "@/components/ui/typography";
import {
  Building2Icon,
  CalendarClockIcon,
  ClockIcon,
  ImageIcon,
} from "lucide-react";
import Image from "next/image";
import { getGalleryImageUrlFromName } from "../utils";
import { formatTimeStamp } from "@/lib/utils";
import { notFound } from "next/navigation";
import { getEventGallery } from "@/app/gallery/actions";
import { GalleryImages } from "@/app/gallery/_components";

type Props = {
  params: {
    id: number;
  };
};

const Page = async ({ params: { id } }: Props) => {
  const event = await getEvent(id);
  const gallery = await getEventGallery(id);
  if (!event) notFound();
  return (
    <>
      <NavSpacer />
      <div className="container py-10 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="relative -z-10 flex items-center justify-center h-96 overflow-hidden bg-muted rounded mb-10 w-full">
            {event.cover_image_url ? (
              <Image
                width={512}
                height={512}
                unoptimized
                src={getGalleryImageUrlFromName(
                  event.id,
                  event.cover_image_url,
                )}
                className="object-cover group-hover:scale-110 transition-transform h-full w-full -z-20"
                alt={event.title + "image"}
              />
            ) : (
              <ImageIcon
                size={128}
                className="-z-10 object-cover group-hover:scale-110 transition-transform text-muted-foreground"
              />
            )}
          </div>
          {event.event_start && (
            <Calendar
              className="items-center justify-center"
              mode="single"
              defaultMonth={new Date(event.event_start)}
              selected={new Date(event.event_start)}
            />
          )}
        </div>
        <div className="flex flex-col lg:flex-row gap-10 mb-48">
          <div className="flex flex-col max-w-screen-lg flex-1">
            <Heading size={"2"}>{event.title}</Heading>
            <div className="flex flex-col gap-1 mt-2 mb-10 text-sm">
              <Detail
                name="Venue"
                value={event.venue || "TBD"}
                icon={<Building2Icon />}
              />
              <Detail
                name="Event"
                value={`${formatTimeStamp(
                  event.event_start,
                )} - ${formatTimeStamp(event.event_end)}`}
                icon={<CalendarClockIcon />}
              />
              <Detail
                name="Registrations"
                value={`${formatTimeStamp(
                  event.registration_start,
                )} - ${formatTimeStamp(event.registration_end)}`}
                icon={<ClockIcon />}
              />
            </div>
            <Paragraph className="whitespace-pre-wrap">{event.desc}</Paragraph>
          </div>
          <div className="flex-1">
            <GalleryImages imgUrls={gallery} />
          </div>
        </div>
      </div>
    </>
  );
};

const Detail = ({
  name,
  value,
  icon,
}: {
  name: string;
  value: string;
  icon: ReactNode;
}) => {
  return (
    <span className="flex items-center gap-3">
      <span>{icon}</span>
      <span>
        {name}: {value}
      </span>
    </span>
  );
};

export default Page;
