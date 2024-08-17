import {
  EventCard,
  EventCardSkeleton,
} from "@/app/events/_components/event-cards/EventCard";
import { getEvents } from "@/app/events/actions";
import { Button } from "@/components/ui/button";
import { Heading, Paragraph } from "@/components/ui/typography";
import Link from "next/link";
import { Suspense } from "react";

type Props = {};

export const Events = async (props: Props) => {
  return (
    <section className="relative flex flex-col justify-center">
      <div className="container py-10 gap-5 flex flex-col items-start">
        <div>
          <Heading size={"2"}>Explore Our Recent Events</Heading>
          <Paragraph className="text-muted-foreground">
            Discover a wealth of past and upcoming opportunities designed to
            fuel your learning and growth journey.
          </Paragraph>
        </div>
        <Suspense fallback={<EventsCardsSkeleton />}>
          <EventsCards />
        </Suspense>
        <Link href={"/events"}>
          <Button size="lg">Browse All Events</Button>
        </Link>
      </div>
    </section>
  );
};

const EventsCards = async () => {
  const events = await getEvents(3);
  return (
    <>
      {events.length === 0 && <p>Events Coming Soon</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit mx-auto gap-5">
        {events.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
    </>
  );
};

const EventsCardsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-5">
      {[...Array(3)].map((_, i) => (
        <EventCardSkeleton className="w-full" key={i} />
      ))}
    </div>
  );
};
