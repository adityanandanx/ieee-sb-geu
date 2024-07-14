import { SearchBar } from "@/components/specific/search";
import { Skeleton } from "@/components/ui/skeleton";
import { Heading } from "@/components/ui/typography";
import { TeamRow, TeamType } from "@/lib/supabase/db";
import { SandwichIcon } from "lucide-react";
import { getTeam } from "../../actions";
import { groupMembersByTeamType } from "../../utils";
import { TeamCard, TeamCardSkeleton } from "./TeamCard";

type Props = {
  search?: string;
  teamtype?: TeamType;
  disableSearch?: boolean;
};

export const TeamCards = async ({ search, teamtype, disableSearch }: Props) => {
  const team = await getTeam(undefined, teamtype);
  const { faculty, core, tech } = groupMembersByTeamType(
    team.filter((e) =>
      search && !disableSearch
        ? e.fullname.toLowerCase().includes(search.toLowerCase()) ||
          e.position.toLowerCase().includes(search.toLowerCase())
        : true,
    ),
  );

  const filteredLength = faculty.length + core.length + tech.length;

  return (
    <div className="w-full flex flex-col gap-5">
      {!disableSearch && (
        <SearchBar
          searchfor="members"
          className="mb-10 max-w-lg self-start w-full"
        />
      )}
      {team.length === 0 ||
        (filteredLength === 0 && (
          <p className="block text-left w-full">
            No members here... <SandwichIcon className="inline" />
          </p>
        ))}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        <TeamSection members={faculty} sectionName="faculty" />
        <TeamSection members={core} sectionName="core" />
        <TeamSection members={tech} sectionName="tech" />
      </div>
    </div>
  );
};

const TeamSection = ({
  members,
  sectionName,
}: {
  members: TeamRow[];
  sectionName: TeamType | "others";
}) => {
  if (members.length === 0) return;
  return (
    <>
      <Heading size={"4"} className="capitalize col-span-full">
        {sectionName}
      </Heading>
      {members.map((member) => (
        <TeamCard key={member.id} member={member} />
      ))}
    </>
  );
};

export const TeamCardsSkeleton = () => {
  return (
    <div className="w-full flex flex-col items-center gap-5">
      <Skeleton className="mb-10 max-w-lg self-start w-full h-10" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 lg:gap-10 w-full">
        {[...Array(10)].map((_, i) => (
          <TeamCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};
