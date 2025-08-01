import type { Metadata } from "next";
import {
  Inter,
  Playfair_Display,
  Arvo,
  Yatra_One,
  Philosopher,
  Macondo,
  Cutive_Mono,
} from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const arvo = Arvo({
  subsets: ["latin"],
  variable: "--font-arvo",
  weight: "400",
});
const yatra = Yatra_One({
  subsets: ["latin"],
  variable: "--font-yatra",
  weight: "400",
});
const philosopher = Philosopher({
  subsets: ["latin"],
  variable: "--font-philosopher",
  weight: "400",
});
const macondo = Macondo({
  subsets: ["latin"],
  variable: "--font-macondo",
  weight: "400",
});
const cutive_mono = Cutive_Mono({
  subsets: ["latin"],
  variable: "--font-cutive-mono",
  weight: "400",
});

const fonts = `${inter.className} ${playfair.variable} ${arvo.variable} ${yatra.variable} ${philosopher.variable} ${macondo.variable} ${cutive_mono.variable}`;

export const metadata: Metadata = {
  title: "Bar Nicolette",
  description: "Bar Nicolette website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${fonts} min-h-screen bg-black text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
