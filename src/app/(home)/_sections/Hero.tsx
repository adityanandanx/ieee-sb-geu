import { Button } from "@/components/ui/button";
import { Heading, Paragraph } from "@/components/ui/typography";
import React from "react";
import hero from "./assets/techlines.jpg";
import Image from "next/image";
import { FadeIn } from "@/components/motion";
import { Pr } from "@/components/ui/typography/Pr";
import { Logo } from "@/components/logo";
import accolladeLogo from "./assets/accollade.png";
import geuLogo from "./assets/geu.png";

type Props = {};

export const Hero = (props: Props) => {
  return (
    <section className="relative min-h-svh flex flex-col">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          aria-hidden
          className="bg-gradient-to-t from-background to-background/35 inset-0 absolute -z-10"
        ></div>
        <Image
          src={hero}
          className="absolute -z-20 inset-0 object-cover object-bottom w-full h-full pointer-events-none"
          alt="hero image"
          priority
          placeholder="blur"
        />
      </div>
      <div className="container flex items-center py-10 flex-1">
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
      <div className="container py-5 flex flex-wrap justify-end items-center gap-4 md:gap-10 overflow-y-hidden">
        <Logo className="h-6 md:h-8" />
        <Image
          src={accolladeLogo}
          alt="Accollade Logo"
          className="h-6 md:h-8 w-auto"
        />
        <Image
          src={geuLogo}
          alt="Accollade Logo"
          className="h-6 md:h-8 w-auto"
        />
      </div>
    </section>
  );
};
