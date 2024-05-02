"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/typography";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <Heading>Something went wrong!</Heading>
      <Button size={"lg"} onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
