"use client";
import { Logo } from "@/components/logo";
import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/typography";
import { Pr } from "@/components/ui/typography/Pr";
import Image from "next/image";
import geuLogo from "./assets/geu.png";
import hero from "./assets/techlines.jpg";
import { toast } from "sonner";

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
          quality={40}
        />
      </div>
      <div className="container flex items-center py-20 flex-1">
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
            <Button
              onClick={() =>
                toast.info("Registrations start soon!", {
                  description: "Stay tuned for more info.",
                })
              }
              size={"lg"}
            >
              Join Us
            </Button>
          </FadeIn>
        </div>
      </div>
      <div className="container py-5 flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-10 overflow-y-hidden">
        <FadeIn transition={{ delay: 1 }}>
          <Logo variant="white" className="h-6 md:h-8" />
        </FadeIn>
        <FadeIn transition={{ delay: 1.2 }}>
          <Image src={geuLogo} alt="GEU Logo" className="h-6 md:h-8 w-auto" />
        </FadeIn>
      </div>
    </section>
  );
};
