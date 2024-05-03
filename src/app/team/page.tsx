import React, { Suspense } from "react";
import { TeamCards, TeamCardsSkeleton } from "./_components";
import { Heading, Paragraph } from "@/components/ui/typography";
import { NavSpacer } from "@/components/shared/nav";
import { TeamType } from "@/lib/supabase/db";

type Props = {
  searchParams: { search?: string; teamtype?: TeamType };
};

const Page = ({ searchParams }: Props) => {
  return (
    <>
      <section className="">
        <NavSpacer />
        <div className="container py-20">
          <Heading className="">Teams</Heading>
          <Paragraph className="text-muted-foreground">
            &quot;Twenty years from now you will be more disappointed by the
            things that you didn&rsquo;t do than by the ones you did do. So
            throw off the bowlines! Sail away from safe harbor. Catch the trade
            winds in your sails. Explore. Dream. Discover!&quot; - Mark Twain
          </Paragraph>
        </div>
      </section>
      <section className="container">
        <Suspense fallback={<TeamCardsSkeleton />}>
          <TeamCards
            search={searchParams.search}
            teamtype={searchParams.teamtype}
          />
        </Suspense>
      </section>
    </>
  );
};

export default Page;
