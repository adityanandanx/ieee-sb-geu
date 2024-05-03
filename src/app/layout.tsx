import { Footer } from "@/components/shared/footer";
import { Nav } from "@/components/shared/nav";
import { RootLoading } from "@/components/ui/root-loading";
import { fontDisplay, fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./globals.css";

const Providers = dynamic(
  () => import("@/components/providers").then((mod) => mod.Providers),
  {
    loading() {
      return <RootLoading />;
    },
    ssr: false,
  }
);

const vercelUrl = process.env.VERCEL_URL;

export const metadata: Metadata = {
  title: "IEEE Student Branch - Graphic Era University",
  description:
    "The IEEE GEU student branch provides a platform for members to develop their technical skills and become future-ready talents in the field of engineering & academic research. It offer events, workshops, and various opportunities to stay updated with industry trends and gain valuable insights.",
  metadataBase: new URL(
    vercelUrl
      ? `https://${vercelUrl}`
      : `http://localhost:${process.env.PORT || 3000}`
  ),
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
          <main className="min-h-screen overflow-x-hidden">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
