import { getUser, getUserRole } from "@/lib/userActions";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";
import NameAlert from "./NameAlert/NameAlert";
import { NavSpacer } from "@/components/shared/nav";

type Props = {
  children: ReactNode;
  admin: ReactNode;
  student: ReactNode;
  volunteer: ReactNode;
};

const DashboardLayout = async ({
  children,
  admin,
  student,
  volunteer,
}: Props) => {
  const user = await getUser();
  if (!user) redirect("/login");
  const role = await getUserRole();
  // console.log(role);
  return (
    <main>
      <section>
        {/* <NameAlert /> */}
        <div className="container">
          <NavSpacer />
          {user.email}
          {(() => {
            switch (role) {
              case "STUDENT":
                return student;
              case "VOLUNTEER":
                return volunteer;
              case "ADMIN":
                return admin;
              default:
                return <>WTF</>;
            }
          })()}
        </div>
      </section>
    </main>
  );
};

export default DashboardLayout;
