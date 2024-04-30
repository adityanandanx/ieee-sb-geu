import { Open_Sans as FontSans, Syne as FontDisplay } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-sans",
});

export const fontDisplay = FontDisplay({
  subsets: ["latin"],
  // weight: ["400"],
  // weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  // weight: ["400", "700"],
  variable: "--font-display",
});
