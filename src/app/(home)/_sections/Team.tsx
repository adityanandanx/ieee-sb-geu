import { TeamCards, TeamCardsSkeleton } from "@/app/team/_components";
import { TeamCardSmall } from "@/app/team/_components/team-cards/TeamCard";
import { getTeam } from "@/app/team/actions";
import { Button } from "@/components/ui/button";
import { Heading, Paragraph } from "@/components/ui/typography";
import { TeamRow } from "@/lib/supabase/db";
import Link from "next/link";
import { Suspense } from "react";
import { TeamCardsLimited } from "./_components";

type Props = {};

export const Team = async (props: Props) => {
  const members = await getTeam();
  return (
    <section
      id="team"
      className="relative min-h-svh flex flex-col justify-center"
    >
      <div className="container py-10 gap-5 flex flex-col items-start">
        <div className="flex-1">
          <Heading size={"2"}>Our team</Heading>
          <Paragraph className="text-muted-foreground">
            Meet the team who make IEEE GEU
          </Paragraph>
        </div>

        <TeamCardsLimited members={members} />
      </div>
    </section>
  );
};
