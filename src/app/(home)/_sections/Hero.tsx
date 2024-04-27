import { Button } from "@/components/ui/button";
import { Heading, Paragraph } from "@/components/ui/typography";
import React from "react";
import hero from "./assets/techlines.jpg";
import Image from "next/image";
import { FadeIn } from "@/components/motion";
import { Pr } from "@/components/ui/typography/Pr";

type Props = {};

export const Hero = (props: Props) => {
  return (
    <section className="relative">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          aria-hidden
          className="bg-gradient-to-t from-background to-background/25 inset-0 absolute -z-10"
        ></div>
        <Image
          src={hero}
          className="absolute -z-20 inset-0 object-cover object-bottom w-full h-full pointer-events-none"
          alt="hero image"
          priority
          placeholder="blur"
        />
      </div>
      <div className="container flex items-end min-h-svh py-10">
        <div className="space-y-3 flex-1">
          <FadeIn transition={{ delay: 0.2 }}>
            <Heading className="">
              Transform your <Pr>dreams</Pr> into <Pr>reality</Pr>
            </Heading>
          </FadeIn>
          <FadeIn transition={{ delay: 0.4 }}>
            <Heading size={"5"} className="max-w-2xl text-muted-foreground">
              Expand your connections, meet alumnis and learn from experienced
              working professionals under the guidance of the IEEE GEU Student
              Branch
            </Heading>
          </FadeIn>
          <FadeIn transition={{ delay: 0.6 }}>
            <Button size={"lg"}>Join Us</Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
