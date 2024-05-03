import { Loader2Icon } from "lucide-react";
import React from "react";

type Props = {};

export const RootLoading = (props: Props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      <Loader2Icon className="animate-spin" />
    </div>
  );
};
