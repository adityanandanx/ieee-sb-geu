import { Open_Sans as FontSans, Syne } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-sans",
});

export const fontSyne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});
