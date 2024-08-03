"use client";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";

const LogoutButton = () => {
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const supabase = createClient();
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      router.replace("/");
    },
  });
  return (
    <Button variant={"outline"} onClick={() => mutate()} isPending={isPending}>
      Log Out
    </Button>
  );
};

export default LogoutButton;
