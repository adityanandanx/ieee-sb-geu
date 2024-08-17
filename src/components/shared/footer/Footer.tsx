"use client";
import {
  SiDiscord,
  SiInstagram,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { SocialLink } from "@/components/specific/social-link";

type Props = {};

export const Footer = (props: Props) => {
  if (process.env.NEXT_PUBLIC_UNDER_MAINTENANCE) return null;
  return (
    <footer className="bg-gray-[#141414] text-white mt-20 border-t">
      <div className="max-w-screen-xl mx-auto py-20 px-5 xl:px-0">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="max-w-sm flex-1">
            <Logo variant="geu" className="h-16 mb-10" />
            {/* <h1 className="text-2xl">
            IEEE Student Branch - Graphic Era Dehradun
          </h1> */}
            <p className="opacity-70 text-sm">
              Expand your connections, meet alumnis and learn from experienced
              working professionals under the guidance of the IEEE GEU Student
              Branch
            </p>
          </div>
          <div className="flex-1 dark flex flex-col gap-2">
            <h1 className="text-2xl">Socials</h1>
            <div className="flex gap-2">
              <SocialLink
                name="IEEE GEU Instagram"
                link="https://www.instagram.com/ieee.geu/"
                icon={<SiInstagram />}
              />
              <SocialLink
                name="IEEE GEU Linkedin"
                link="https://www.linkedin.com/company/geu-ieee-student-branch/"
                icon={<SiLinkedin />}
              />
              <SocialLink
                name="IEEE GEU Discord"
                link="https://discord.gg/WS5K5GHMZQ"
                icon={<SiDiscord />}
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
        <p className="mt-20 text-sm">
          &copy; 2024 IEEE Student Branch - GEU | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
