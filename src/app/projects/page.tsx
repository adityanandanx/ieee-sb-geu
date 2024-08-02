import React, { Suspense } from "react";
import { Heading, Paragraph } from "@/components/ui/typography";
import { NavSpacer } from "@/components/shared/nav";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {};

const Page = ({}: Props) => {
  return (
    <>
      <section className="">
        <NavSpacer />
        <div className="container py-20">
          <Heading className="">Projects</Heading>
          <Paragraph className="text-muted-foreground">
            &quot;Imagination is more important than knowledge. For knowledge is
            limited, whereas imagination embraces the entire world, stimulating
            progress, giving birth to evolution.&quot; - Albert Einstein
          </Paragraph>
        </div>
      </section>
      <section className="container flex flex-col gap-2">
        <p>Projects to be announced soon!</p>
        <Link className="w-fit" href={"/"}>
          <Button variant={"secondary"} className="gap-2">
            <ArrowLeft /> Back to home
          </Button>
        </Link>
      </section>
    </>
  );
};

export default Page;
