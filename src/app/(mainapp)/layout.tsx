import React from 'react';
import { ClerkProvider } from "@clerk/nextjs";
import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from "next/font/google";
import Sidebar from '../../components/Sidebar';
import TopNavBar from '../../components/TopNavBar';
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function MainAppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/site.webmanifest" />
          <GoogleTagManager gtmId="GTM-W53R9WWP" />
        </head>
        <body className={`${inter.className} bg-midnight-black text-soft-white`}>
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
              <TopNavBar />
              <main className="flex-1 overflow-x-hidden overflow-y-auto bg-midnight-black">
                <div className="container mx-auto px-6 py-8">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}

