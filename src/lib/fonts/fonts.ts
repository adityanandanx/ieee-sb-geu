import { Open_Sans as FontSans, Syne as FontDisplay } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  preload: true,
  variable: "--font-sans",
});

export const fontDisplay = FontDisplay({
  subsets: ["latin"],
  preload: true,
  variable: "--font-display",
});
