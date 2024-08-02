import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { EditEventForm } from "../../../edit-event-form";
import { Skeleton } from "@/components/ui/skeleton";
import { Gallery } from "../../../gallery-edit";
import { EventUsersView } from "./EventUsersView";
import { Separator } from "@/components/ui/separator";
import { getEvent } from "@/app/events/actions";
import { Heading } from "@/components/ui/typography";

type Props = {
  params: {
    id?: number;
  };
};

const EditEventPage = async ({ params }: Props) => {
  if (!params.id) notFound();
  const event = await getEvent(params.id);
  if (!event) notFound();
  return (
    <div>
      <Heading className="py-16">Edit Event</Heading>
      <div className="relative flex flex-col lg:flex-row gap-16 items-stretch">
        <Suspense fallback={<Skeleton className="h-96" />}>
          <div className="flex-1">
            <EditEventForm defaultValues={{ ...event, id: params.id }} />
          </div>
        </Suspense>
        <Suspense fallback={<Skeleton className="h-96" />}>
          <div className="flex-1">
            <Gallery eventId={params.id} />
          </div>
        </Suspense>
      </div>
      {/* <Separator className="w-full my-10" /> */}
      {/* <EventUsersView eventId={params.id} /> */}
    </div>
  );
};

export default EditEventPage;
