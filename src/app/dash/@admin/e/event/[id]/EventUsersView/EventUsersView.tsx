"use client";
import React from "react";
import UsersTableSkeleton from "@/components/specific/UsersTable/UsersTableSkeleton";
import { UsersTable } from "@/components/specific/UsersTable";
import { UsersRow } from "@/lib/supabase/db";
import { toast } from "sonner";

type Props = {
  eventId: number;
};

const EventUsersView = ({ eventId }: Props) => {
  // const { data, isPending, isError, error } = useRegisteredUsersQuery(eventId);
  // const users: UsersRow[] = [];
  // if (isError) {
  //   toast.error("An error occurred", { description: error.message });
  //   return null;
  // }
  // data?.forEach((d) => {
  //   if (d.users) users.push(d.users);
  // });
  // return (
  //   <div className="mb-20">
  //     <h1 className="text-2xl font-medium">Registered Users</h1>
  //     {isPending ? <UsersTableSkeleton /> : <UsersTable users={users} />}
  //   </div>
  // );
  return "Coming soon";
};

export default EventUsersView;
