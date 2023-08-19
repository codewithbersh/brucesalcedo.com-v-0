import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import "@/styles/globals.css";
import { Raleway } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";

const raleway = Raleway({ subsets: ["latin"] });

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
          raleway.className,
          "min-h-screen bg-background antialiased pt-[48px]"
        )}
      >
        <div>
          <SiteHeader />
          {children}
        </div>
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
