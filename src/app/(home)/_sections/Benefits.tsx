import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  FadeInCard,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { FadeInHeading } from "@/components/ui/typography";
import { SquareCheckBigIcon } from "lucide-react";
import { benefits } from "./utils/data";
import { Benefit } from "./utils/types";

type Props = {};

export const Benefits = (props: Props) => {
  return (
    <section className="relative h-svh max-h-[1024px] flex flex-col justify-center">
      <div className="container py-20 px-0 lg:px-10 space-y-10">
        <div className="px-10 lg:px-0">
          <FadeInHeading size={"2"}>Why Join IEEE?</FadeInHeading>
          <FadeInHeading size={"4"} className="text-muted-foreground">
            Explore Membership Benefits
          </FadeInHeading>
        </div>
        <ScrollArea snap="x" className="w-full snap-x">
          <div className="flex gap-2 md:gap-5 flex-row mx-10 lg:mx-0">
            {benefits.map((benefit, i) => (
              <BenefitCard key={i} {...benefit} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export const BenefitCard = ({ title, desc, content, icon }: Benefit) => {
  return (
    <FadeInCard className="snap-center flex-1 py-10 w-[80vw] max-w-[400px] lg:max-w-none lg:w-auto">
      <CardHeader>
        <div className="ml-auto opacity-50">{icon}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {content.map((feature, i) => (
          <li className="list-none flex items-start gap-3" key={i}>
            <SquareCheckBigIcon className=" scale-80" />
            <span className="flex-1">{feature}</span>
          </li>
        ))}
      </CardContent>
    </FadeInCard>
  );
};
