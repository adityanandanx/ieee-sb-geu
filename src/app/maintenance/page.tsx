import { Heading } from "@/components/ui/typography";
import React from "react";
import waitGif from "./wait1.webp";
import Image from "next/image";
import geuLogo from "@/app/(home)/_sections/assets/geu.png";
import { Logo } from "@/components/logo";

type Props = {};

const MaintenancePage = (props: Props) => {
  return (
    <div className="w-full h-svh flex items-center justify-center">
      <div className="text-left max-w-2xl w-full px-4">
        <Heading className="text-4xl">
          Website currently under maintenance
        </Heading>
        <p className="mb-10 opacity-50">Please come back later</p>
        <Image src={waitGif} alt="Wait gif" />
        <div className="flex gap-4 mt-10">
          <Logo variant="white" className="w-32" />
          <Image src={geuLogo} alt="GEU Logo" className="h-6 md:h-8 w-auto" />
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
