"use client";
import { TeamCardSmall } from "@/app/team/_components/team-cards/TeamCard";
import { Button } from "@/components/ui/button";
import { TeamRow } from "@/lib/supabase/db";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const TeamCardsLimited = ({
  members,
  limit = undefined,
}: {
  members: TeamRow[];
  limit?: number;
}) => {
  const shownMembers = members.slice(0, limit);
  const pad = 2;

  return (
    <div className="flex flex-col items-center gap-10 w-full px-4">
      <Carousel
        plugins={[Autoplay({ delay: 5000 })]}
        opts={{
          align: "center",
          skipSnaps: true,
          slidesToScroll: "auto",
        }}
        className="w-full relative"
      >
        <CarouselContent className="-ml-0 overflow-visible">
          {shownMembers.map((m) => (
            <CarouselItem className="pl-0 basis-1/3 md:basis-1/5" key={m.id}>
              <TeamCardSmall key={m.id} member={m} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 justify-center w-full"></div>
      <Link href={"/team"}>
        <Button size="lg">View all members</Button>
      </Link>
    </div>
  );
};

export const TeamCardsLimitedSkeleton = ({ limit = 6 }: { limit?: number }) => {
  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <div className="flex-[2_2_0%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 justify-center w-full">
        {[...Array(limit)].map((m) => (
          <TeamCardSmall key={m.id} member={m} />
        ))}
      </div>
      <Link href={"/team"}>
        <Button size="lg">View all members</Button>
      </Link>
    </div>
  );
};
