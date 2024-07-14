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

export type TeamCardProps = {
  member: TeamRow;
};

export type TeamCard = React.FC<TeamCardProps>;

export const TeamCard: TeamCard = ({ member }) => {
  const TCard = () => (
    <div className="w-full">
      <div className="group z-0 relative overflow-hidden h-full w-full max-w-xs sm:max-w-none mx-auto">
        <CardHeader className="z-50 flex flex-col sm:flex-row items-center text-center sm:text-left gap-2 sm:gap-4">
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
      </div>
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

export const TeamCardSmall: TeamCard = ({ member }) => {
  const TCard = () => (
    <div className="group z-0 relative overflow-hidden h-full w-full max-w-xs mx-auto">
      <CardHeader className="z-50 flex flex-col items-center text-center gap-2">
        <Avatar className="w-20 aspect-square h-auto">
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
        </div>
      </CardHeader>
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
