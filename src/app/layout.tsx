import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import LoadingScreen from "@/components/loading-screen";

const permanentMarker = localFont({
  src: "../../public/fonts/PermanentMarker-Regular.ttf",
  variable: "--font-permanent-marker",
});

const geistSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Son and An's Wedding Invitation",
  description: "Son and An's Wedding Invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${permanentMarker.variable} antialiased`}
      >
        <LoadingScreen>{children}</LoadingScreen>
      </body>
    </html>
  );
}
