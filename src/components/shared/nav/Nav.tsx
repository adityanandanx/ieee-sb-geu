"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { NavLinks } from "./NavLinks";
import { Logo } from "@/components/logo";
import { Variants, motion } from "framer-motion";

const navVariants: Variants = {
  noBg: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    backdropFilter: "blur(0px)",
    borderColor: "rgba(0, 0, 0, 0)",
  },
  bg: {
    backgroundColor: "rgba(0, 0, 0, .25)",
    backdropFilter: "blur(12px)",
  },
  hidden: {
    opacity: 0,
    y: "-100%",
  },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.75,
      duration: "0.5",
      ease: "anticipate",
    },
  },
};

type Props = {};

export const Nav = (props: Props) => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBg(true);
      } else {
        setBg(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={"hidden"}
      variants={navVariants}
      animate={[bg ? "bg" : "noBg", "visible"]}
      className="py-5 fixed top-0 w-full z-50"
    >
      <nav className="container flex justify-between items-center">
        <Link
          href={"/"}
          className="flex items-end leading-5 gap-4 font-bold font-syne text-lg"
        >
          <Logo variant="white" className="w-24" /> SB GEU
        </Link>
        <NavLinks>
          <Link href="/events">Events</Link>
          <Link href="/about">About</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="#" target="_blank">
            Contact
          </Link>
          {/* {user ? (
            <Link href="/dashboard">
              <Button size={"sm"}>Dashboard</Button>
            </Link>
          ) : (
            <>
              <Link href="/auth/login">
                <Button variant={"secondary"} size={"sm"}>
                  Log In
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button size={"sm"}>Sign Up</Button>
              </Link>
            </>
          )} */}
          {/* <div className="flex gap-1">
            <ThemeDropdown />
            {user ? <ProfileCardDialog /> : null}
          </div> */}
        </NavLinks>
      </nav>
    </motion.header>
  );
};
