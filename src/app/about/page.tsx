import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import teamImg from "./assets/team.jpeg";
import { Heading, Paragraph } from "@/components/ui/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  FadeInCard,
} from "@/components/ui/card";
import { CheckCheckIcon } from "lucide-react";
import { type CoreValue } from "./types";
import { coreValues, goals } from "./data";
import { PropsWithChildren } from "react";

const About = () => {
  return (
    <>
      <section className="relative h-[640px]">
        <Image
          src={teamImg}
          alt="Team image"
          priority
          className="absolute w-full h-full left-0 top-0 object-cover object-top"
        />
      </section>
      <section className="container pt-20 max-w-2xl">
        <Heading>About Us</Heading>
        <Paragraph>
          IEEE is an organization dedicated to advancing innovation and
          technological excellence for the benefit of humanity and is the
          world&lsquo;s largest technical professional society. It is designed
          to serve professionals involved in all aspects of the electrical,
          electronic, and computing fields and related areas of science and
          technology that underlie modern civilization.
        </Paragraph>
        <Paragraph>
          IEEE membership offers access to technical innovation, cutting-edge
          information, networking opportunities, and exclusive member benefits.
          Members support IEEE&lsquo;s mission to advance technology for
          humanity and the profession, while memberships build a platform to
          introduce careers in technology to students around the world.
        </Paragraph>
      </section>
      <section className="container py-20 grid grid-cols-12 gap-5 grid-flow-dense">
        <FadeInCard className="p-4 md:p-8 col-span-full md:col-span-5">
          <CardHeader>
            <CardTitle>Mission</CardTitle>
            <CardDescription>The mission of IEEE</CardDescription>
          </CardHeader>
          <CardContent>
            <Paragraph>
              IEEE fosters technological innovation and excellence for the
              benefit of humanity.
            </Paragraph>
          </CardContent>
        </FadeInCard>
        <FadeInCard className="p-4 md:p-8 col-span-full md:col-span-7">
          <CardHeader>
            <CardTitle>Vision</CardTitle>
            <CardDescription>The vision of IEEE</CardDescription>
          </CardHeader>
          <CardContent>
            <Paragraph>
              IEEE will be essential to the global technical community and to
              technical professionals everywhere, and be universally recognized
              for the contributions of technology, and of technical
              professionals in improving global conditions.
            </Paragraph>
          </CardContent>
        </FadeInCard>
        <FadeInCard className="p-4 md:p-8 col-span-full">
          <CardHeader>
            <CardTitle>Meaning of I-E-E-E</CardTitle>
            <CardDescription>
              Institute of Electrical and Electronics Engineers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Paragraph>
              IEEE, pronounced &quot;Eye-triple-E,&quot; stands for the
              Institute of Electrical and Electronics Engineers. The
              organization is chartered under this name and it is the full legal
              name. However, as the world&lsquo;s largest technical professional
              organization, IEEE&lsquo;s membership has long been composed of
              engineers, scientists, and allied professionals. These include
              computer scientists, software developers, information technology
              professionals, physicists, medical doctors, and many others in
              addition to IEEE&lsquo;s electrical and electronics engineering
              core. For this reason the organization no longer goes by the full
              name, except on legal business documents, and is referred to
              simply as IEEE.
            </Paragraph>
          </CardContent>
        </FadeInCard>
        <FadeInCard className="p-4 md:p-8 col-span-full lg:col-span-7">
          <CardHeader>
            <CardTitle>Core Values</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            {coreValues.map((v, i) => (
              <ListItem key={i + v.value}>
                <span className="font-bold">{v.value}</span>:{" "}
                <span className="text-muted-foreground">{v.statement}</span>
              </ListItem>
            ))}
          </CardContent>
        </FadeInCard>
        <FadeInCard className="p-4 md:p-8 col-span-full lg:col-span-5">
          <CardHeader>
            <CardTitle>2020 - 2025 goals</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            {goals.map((g, i) => (
              <ListItem key={i}>
                <span className="">{g}</span>
              </ListItem>
            ))}
          </CardContent>
        </FadeInCard>
      </section>
    </>
  );
};

const ListItem = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex gap-5">
      <div>
        <CheckCheckIcon className="w-8" />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default About;
