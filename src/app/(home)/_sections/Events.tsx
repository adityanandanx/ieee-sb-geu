import { EventCard } from "@/app/events/_components/event-cards/EventCard";
import { getEvents } from "@/app/events/actions";
import { Heading } from "@/components/ui/typography";
import React from "react";

type Props = {};

export const Events = async (props: Props) => {
  const events = await getEvents(3);
  return (
    <section className="relative h-svh max-h-[1024px] flex flex-col justify-center">
      <div className="container py-10 gap-5">
        <Heading>Recent Events</Heading>
        {events.length === 0 && <p>Events Coming Soon</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
