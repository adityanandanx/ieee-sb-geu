import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { fontSans, fontDisplay } from "@/lib/fonts";
import { Nav } from "@/components/shared/nav";
import dynamic from "next/dynamic";
import { RootLoading } from "@/components/ui/root-loading";

const Providers = dynamic(
  () => import("@/components/providers").then((mod) => mod.Providers),
  {
    loading() {
      return <RootLoading />;
    },
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: "IEEE Student Branch - Graphic Era University",
  description:
    "The IEEE GEU student branch provides a platform for members to develop their technical skills and become future-ready talents in the field of engineering & academic research. It offer events, workshops, and various opportunities to stay updated with industry trends and gain valuable insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased dark overflow-x-hidden",
          fontSans.variable,
          fontDisplay.variable
        )}
      >
        <Providers>
          <Nav />
          <main className="">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
