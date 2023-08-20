import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { Toaster } from "@/components/ui/toaster";

import { cn } from "@/lib/utils";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bruce Salcedo",
  description: "A full-stack web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "min-h-screen bg-background antialiased pt-[50px] flex flex-col"
        )}
      >
        <SiteHeader />
        <div>{children}</div>
        <SiteFooter className="mt-auto" />
        {/* <Analytics /> */}
        <Toaster />
      </body>
    </html>
  );
}
