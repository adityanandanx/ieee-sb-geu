import React from "react";
import { Gallery } from "./_components";
import { NavSpacer } from "@/components/shared/nav";
import { Heading, Paragraph } from "@/components/ui/typography";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <section className="">
        <NavSpacer />
        <div className="container py-20">
          <Heading className="">Gallery</Heading>
          <Paragraph className="text-muted-foreground">
            &quot;Twenty years from now you will be more disappointed by the
            things that you didn&rsquo;t do than by the ones you did do. So
            throw off the bowlines! Sail away from safe harbor. Catch the trade
            winds in your sails. Explore. Dream. Discover!&quot; - Mark Twain
          </Paragraph>
        </div>
      </section>
      <section className="container">
        <Gallery />
      </section>
    </>
  );
};

export default Page;
