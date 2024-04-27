import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Heading, Paragraph } from "@/components/ui/typography";
import React from "react";

type Props = {};

export const Hero = (props: Props) => {
  return (
    <section className="flex items-center min-h-[768px]">
      <div className="space-y-3">
        <Heading className="max-w-3xl font-extrabold">
          Transforming Dreams into Reality
        </Heading>
        <Heading size={"5"} className="max-w-xl">
          Graphic Era University student chapter
        </Heading>
        <Button size={"lg"}>Join Us</Button>
      </div>
    </section>
  );
};
