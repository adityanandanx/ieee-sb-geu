import { Button } from "@/components/ui/button";
import { Heading, Paragraph } from "@/components/ui/typography";
import Link from "next/link";
import { Suspense } from "react";

type Props = {};

export const Team = (props: Props) => {
  return (
    <section className="relative min-h-svh flex flex-col justify-center">
      <div className="container py-10 gap-5 flex flex-col items-start">
        <div>
          <Heading size={"2"}>Explore Our Recent Events</Heading>
          <Paragraph className="text-muted-foreground">
            Discover a wealth of past and upcoming opportunities designed to
            fuel your learning and growth journey.
          </Paragraph>
        </div>
        <Suspense fallback={<></>}>{/* <EventsCards /> */}</Suspense>
        <Link href={"/events"}>
          <Button size="lg">Browse All Events</Button>
        </Link>
      </div>
    </section>
  );
};

export const TeamCards = (props: Props) => {
  return null;
};
