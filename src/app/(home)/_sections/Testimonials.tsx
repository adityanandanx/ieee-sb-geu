import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { testimonials } from "./utils/data";
import { Testimonial } from "./utils/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { UserIcon } from "lucide-react";
import { FadeInHeading, Heading, Paragraph } from "@/components/ui/typography";
import techLines2 from "./assets/techlines2.jpg";

type Props = {};

export const Testimonials = (props: Props) => {
  return (
    <section className="relative min-h-svh max-h-[1024px] flex flex-col justify-center">
      <div className="container py-10 gap-10 grid grid-cols-1 sm:grid-cols-2">
        <div className="py-10">
          <FadeInHeading size={"2"} className="">
            Testimonials
          </FadeInHeading>
          <FadeInHeading size={"6"} className="text-muted-foreground">
            Hear it from others
          </FadeInHeading>
        </div>
        <Card className="relative">
          <Carousel>
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem className="w-full" key={t.author}>
                  <TestimonialCard key={t.author} testimonial={t} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6 md:-left-12" />
            <CarouselNext className="-right-6 md:-right-12" />
          </Carousel>
        </Card>
      </div>
    </section>
  );
};

export const TestimonialCard = ({
  testimonial,
}: {
  testimonial: Testimonial;
}) => {
  return (
    // <Card className="max-w-lg w-full h-full">
    <>
      <CardHeader className="pt-5 pl-5 pr-5 md:pt-20 md:pl-20 md:pr-20">
        <div className="max-w-32 w-full bg-primary/10 aspect-square ml-auto mr-auto sm:mr-0 flex items-center justify-center rounded-full overflow-hidden">
          {testimonial.avatar ? (
            <Image
              src={testimonial.avatar}
              alt={testimonial.author + " profile picture"}
              width={170}
              height={170}
              className="w-full h-full"
              quality={80}
            />
          ) : (
            <UserIcon size={170 / 2} className="text-muted-foreground/10" />
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-5 pl-5 pr-5 md:pb-20 md:pl-20 md:pr-20">
        <div className="text-lg md:text-xl">
          &quot;{testimonial.content}&quot;
        </div>
        <div className="mt-4 text-sm font-bold">{testimonial.author}</div>
        <div className="text-sm text-muted-foreground">
          {testimonial.position}
        </div>
      </CardContent>
    </>
    // </Card>
  );
};
