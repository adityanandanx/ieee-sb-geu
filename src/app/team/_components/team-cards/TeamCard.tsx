import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  FadeInCard,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { TeamRow } from "@/lib/supabase/db";
import { cn } from "@/lib/utils";
import { ImageIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import { HTMLProps } from "react";
import { getMemberAvatar } from "../../utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

type Props = {
  member: TeamRow;
};

export const TeamCard = ({ member }: Props) => {
  return (
    <div className="w-full">
      <FadeInCard className="group z-0 relative overflow-hidden h-full w-full">
        <CardHeader className="z-50 flex flex-col sm:flex-row sm:items-center gap-10">
          <Avatar className="w-32 aspect-square h-auto mx-auto sm:mx-0">
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
            {/* <CardDescription>{member.teamtype}</CardDescription> */}
          </div>
        </CardHeader>
      </FadeInCard>
    </div>
  );
};

export const TeamCardSkeleton = ({
  className,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <Skeleton className={cn("w-full h-[176px] p-10", className)} {...props} />
  );
};
