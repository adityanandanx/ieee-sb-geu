import React from "react";
import { getEvent } from "../actions";
import { NavSpacer } from "@/components/shared/nav/NavSpacer";
import { Calendar } from "@/components/ui/calendar";
import { Heading, Paragraph } from "@/components/ui/typography";
import { Building2Icon, ImageIcon } from "lucide-react";
import Image from "next/image";
import { getGalleryImageUrlFromName } from "../utils";

type Props = {
  params: {
    id: number;
  };
};

const Page = async ({ params: { id } }: Props) => {
  const event = await getEvent(id);
  return (
    <>
      <NavSpacer />
      <div className="container py-10 flex gap-10">
        {event.event_start && (
          <Calendar
            className=""
            mode="single"
            defaultMonth={new Date(event.event_start)}
            selected={new Date(event.event_start)}
          />
        )}
        <div className="flex flex-col">
          <div className="relative -z-10 flex items-center justify-center h-96 overflow-hidden bg-muted rounded mb-10">
            {event.cover_image_url ? (
              <Image
                width={512}
                height={512}
                src={getGalleryImageUrlFromName(
                  event.id,
                  event.cover_image_url
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

          <Heading size={"2"}>{event.title}</Heading>
          <div className="flex items-center gap-4 mb-10">
            <Building2Icon /> {event.venue}
          </div>
          <Paragraph className="whitespace-pre-wrap">{event.desc}</Paragraph>
        </div>
      </div>
    </>
  );
};

export default Page;
