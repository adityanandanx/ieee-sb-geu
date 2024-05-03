"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { HTMLProps, useCallback, useEffect, useState } from "react";
import { debounce, throttle } from "lodash";

interface Props extends HTMLProps<HTMLDivElement> {
  searchfor: string;
}

export const SearchBar = ({ className, searchfor, ...props }: Props) => {
  const router = useRouter();
  const sp = useSearchParams();

  const updateQueryString = debounce((search: string) => {
    router.push(`?search=${search}`);
  }, 500);

  return (
    <div
      className={cn("flex items-center relative gap-5", className)}
      {...props}
    >
      <SearchIcon size={24} className="absolute left-2 text-muted-foreground" />
      <Input
        defaultValue={sp.get("search") || ""}
        onChange={(e) => {
          const { value } = e.currentTarget;
          updateQueryString(value);
        }}
        placeholder={`Search for ${searchfor}`}
        style={{ paddingLeft: "40px" }}
      />
    </div>
  );
};
