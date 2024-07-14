import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  CardDescription,
  CardHeader,
  CardTitle,
  FadeInCard,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { TeamRow } from "@/lib/supabase/db";
import { cn } from "@/lib/utils";
import { LinkedinIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { HTMLProps } from "react";
import { getMemberAvatar } from "../../utils";
import { Button } from "@/components/ui/button";

type Props = {
  member: TeamRow;
};

export const TeamCard = ({ member }: Props) => {
  const TCard = () => (
    <div className="w-full">
      <FadeInCard className="group z-0 relative overflow-hidden h-full w-full max-w-xs sm:max-w-none mx-auto">
        <CardHeader className="z-50 flex flex-col sm:flex-row items-center text-center sm:text-left gap-10">
          <Avatar className="w-32 aspect-square h-auto sm:mx-0">
            <AvatarImage
              src={(member.avatar && getMemberAvatar(member.avatar)) || ""}
              alt={member.fullname + " avatar"}
              className="object-cover"
            />
            <AvatarFallback>
              <UserIcon />
            </AvatarFallback>
          </Avatar>
          <div className="capitalize">
            <CardTitle>{member.fullname}</CardTitle>
            <CardDescription>{member.position}</CardDescription>
            <Link href={`?teamtype=${member.teamtype}`}>
              <Badge variant={"outline"}>{member.teamtype}</Badge>
            </Link>
          </div>
        </CardHeader>
      </FadeInCard>
    </div>
  );

  if (member.linkedin) {
    return (
      <a href={member.linkedin}>
        <TCard />
      </a>
    );
  }
  return <TCard />;
};

export const TeamCardSkeleton = ({
  className,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <Skeleton className={cn("w-full h-[176px] p-10", className)} {...props} />
  );
};
