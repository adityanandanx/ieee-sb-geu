"use client";
import { Logo } from "@/components/logo";
import { NumberCounter } from "@/components/specific/number-counter";
import { AnimatedLink } from "@/components/ui/animated-link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  FadeInCard,
} from "@/components/ui/card";
import { Heading, Paragraph } from "@/components/ui/typography";
import Image from "next/image";
import bentoImg from "./assets/geubuilding.jpg";

type Props = {};

export const Ieee = (props: Props) => {
  return (
    <section className="relative flex flex-col">
      <div className="container py-10 gap-5 grid grid-flow-dense grid-cols-12">
        <FadeInCard className="col-span-full sm:col-span-8 relative overflow-hidden z-0">
          <CardHeader>
            <CardTitle>
              Institute of Electrical and Electronics Engineers
            </CardTitle>
            <CardDescription>
              Advancing technology for the benefit of humanity.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Paragraph>
              IEEE is the worlds largest technical professional organization
              dedicated to advancing technology for the benefit of humanity.
            </Paragraph>
            <Paragraph>
              IEEE and its members inspire a global community to innovate for a
              better tomorrow through its more than 400,000 members in over 160
              countries, and its highly cited publications, conferences,
              technology standards, and professional and educational activities.
              IEEE is the trusted “voice” for engineering, computing, and
              technology information around the globe.
            </Paragraph>
            <AnimatedLink
              className="text-primary"
              href={"https://ieee.org/"}
              target="_blank"
            >
              Learn more at ieee.org
            </AnimatedLink>
            <Logo className="w-48 mt-5" />
          </CardContent>
        </FadeInCard>

        <div className="grid grid-cols-2 col-span-full sm:grid-cols-1 sm:col-span-4 lg:grid-cols-2 gap-5 justify-center">
          <NumberCounter plus text="Members" n={150} className="col-span-1" />
          <NumberCounter
            plus
            text="Activities"
            n={500}
            className="col-span-1"
          />
          <NumberCounter text="Patents" n={40} className="col-span-1" />
          <NumberCounter
            plus
            text="Publications"
            n={300}
            className="col-span-1"
          />
        </div>

        <FadeInCard className="col-span-full md:col-span-5">
          <CardHeader>
            <CardTitle>About IEEE Student Branch GEU</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <Paragraph>
              The IEEE GEU student branch provides a platform for members to
              develop their technical skills and become future-ready talents in
              the field of engineering & academic research. It offer events,
              workshops, and various opportunities to stay updated with industry
              trends and gain valuable insights.
            </Paragraph>
            <Logo variant="geu" className="w-60 mt-5" />
          </CardContent>
        </FadeInCard>

        <FadeInCard
          fadeInClassName="w-full h-full"
          className="col-span-full md:col-span-7 relative overflow-hidden"
        >
          <Image
            className="object-cover h-full w-full aspect-video"
            src={bentoImg}
            alt="GEU building"
          />
        </FadeInCard>
      </div>
    </section>
  );
};
