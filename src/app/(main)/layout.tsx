import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import dynamic from "next/dynamic";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

// Client-only providers and chrome:
const ClientProviders = dynamic(() => import("../../components/ClientProviders"), { ssr: false });
const Navbar = dynamic(() => import("../../components/Navbar"), { ssr: false });
const Footer = dynamic(() => import("../../components/Footer"), { ssr: false });

export const metadata: Metadata = {
  title: "LookMate: AI Outfit Stylist & Wardrobe Assistant",
  description:
    "LookMate is your personal AI stylist, transforming your wardrobe into endless outfit possibilities. Join the waitlist for our upcoming mobile app.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <GoogleTagManager gtmId="GTM-W53R9WWP" />
      </head>
      <body className={inter.className}>
        <ClientProviders>
          <Navbar />
          {children}
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
