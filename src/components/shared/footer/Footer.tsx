import Image from "next/image";
import React from "react";
import Link from "next/link";
import { InstagramIcon, LinkedinIcon } from "lucide-react";
import { SocialLink } from "@/components/specific/social-link";
import { Logo } from "@/components/logo";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="bg-white text-black mt-20 border-t">
      <div className="max-w-screen-xl mx-auto py-20 px-5 xl:px-0 flex flex-col lg:flex-row gap-20">
        <div className="max-w-sm flex-1">
          <Logo variant="black" className="h-8 mb-10" />
          {/* <h1 className="text-2xl">
            IEEE Student Branch - Graphic Era Dehradun
          </h1> */}
          <p className="text-background opacity-70 text-sm">
            Expand your connections, meet alumnis and learn from experienced
            working professionals under the guidance of the IEEE GEU Student
            Branch
          </p>
          <p className="mt-4 md:mt-10 text-sm">
            &copy; 2024 IEEE Student Branch - GEU | All Rights Reserved
          </p>
        </div>
        <div className="flex-1 dark flex flex-col gap-2">
          <h1 className="text-2xl">Socials</h1>
          <div className="flex gap-2">
            <SocialLink
              name="IEEE GEU Instagram"
              link="https://www.instagram.com/ieee.geu/"
              icon={<InstagramIcon />}
            />
            <SocialLink
              name="IEEE GEU Linkedin"
              link="https://www.linkedin.com/company/geu-ieee-student-branch/"
              icon={<LinkedinIcon />}
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <Link href="/events">Events</Link>
          <Link href="/team">Team</Link>
          <Link href="/about">About</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="https://www.instagram.com/ieee.geu/" target="_blank">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};
