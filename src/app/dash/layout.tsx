import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

const DashLayout = async ({ children }: PropsWithChildren) => {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return <>{children}</>;
};

export default DashLayout;
