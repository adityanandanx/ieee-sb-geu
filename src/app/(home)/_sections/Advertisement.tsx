import { Logo } from "@/components/logo";
import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Heading, Paragraph } from "@/components/ui/typography";
import { Pr } from "@/components/ui/typography/Pr";
import Image from "next/image";
import geuLogo from "./assets/geu.png";
import hero from "./assets/techlines.jpg";
import Link from "next/link";
import matrix from "./assets/matrix.png";

type Props = {};

export const Advertisement = (props: Props) => {
  return (
    <section className="relative flex flex-col">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          aria-hidden
          className="bg-gradient-to-t from-background to-background/0 inset-0 absolute -z-10"
        ></div>
        <div
          aria-hidden
          className="bg-gradient-to-b from-background to-background/0 inset-0 absolute -z-10"
        ></div>
        <Image
          src={matrix}
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
            <Heading size={"3"} className="">
              Registrations for IEEE Matrix 2024 is open!
            </Heading>
          </FadeIn>
          <FadeIn transition={{ delay: 0.4 }}>
            <Paragraph className="text-muted-foreground">
              IEEE MATRIX 2024 is a prestigious intra-university innovation
              competition organized by the IEEE Student Branch at Graphic Era
              (Deemed to be) University (GEU). This competition serves as a
              platform to foster innovation, technological advancement, and
              cross-disciplinary collaboration among students from all campuses
              of the Graphic Era educational ecosystem.
            </Paragraph>
          </FadeIn>
          <FadeIn transition={{ delay: 0.6 }}>
            <Link href="/events/21" target="_blank">
              <Button size={"lg"}>Register Now</Button>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
