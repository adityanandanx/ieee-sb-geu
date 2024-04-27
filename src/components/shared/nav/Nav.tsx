import Link from "next/link";
import React from "react";
import { Button } from "../../ui/button";
import Image from "next/image";
import logoImg from "../assets/logo.svg";
import { NavLinks } from "./NavLinks";
import { Logo } from "@/components/logo";

type Props = {};

export const Nav = async (props: Props) => {
  return (
    <header className="px-5 py-2 border-b sticky top-0 w-full bg-background/25 backdrop-blur-md z-50">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link href={"/"} className="flex items-center gap-4">
          <Logo className="w-32" />
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
    </header>
  );
};
