import { Skeleton } from "@/components/ui/skeleton";
import React, { useCallback, useMemo } from "react";

type Props = {};

const GallerySkeleton = (props: Props) => {
  return (
    <div className="flex flex-1 gap-5 flex-wrap">
      {[...Array(10)].map((_, i) => (
        <Skeleton
          key={i}
          className="h-[256px] rounded cursor-pointer object-contain"
          style={{ width: 256 }}
        />
      ))}
    </div>
  );
};

export { GallerySkeleton };
