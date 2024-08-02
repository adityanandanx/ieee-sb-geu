import { NavSpacer } from "@/components/shared/nav";
import { Heading, Paragraph } from "@/components/ui/typography";
import React from "react";
// import EventCalendar from "./EventCalendar";

type Props = {};

const ParticipantDashboard = (props: Props) => {
  return (
    <div className="min-h-[80vh]">
      <NavSpacer />
      <div className="flex flex-col justify-center items-center py-20">
        <Heading>Student Dashboard</Heading>
        <Paragraph>Coming soon...</Paragraph>
      </div>
      {/* <EventCalendar /> */}
    </div>
  );
};

export default ParticipantDashboard;
