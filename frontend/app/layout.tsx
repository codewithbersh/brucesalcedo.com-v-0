import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { Toaster } from "@/components/ui/toaster";

import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { siteConfig } from "@/config/site";

import { MouseFlow } from "@/components/mouse-flow";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  description: siteConfig.description,
  verification: {
    google: "S5J6W5nKD972peB-ngoxLamABDNjl_BqUYma6HvjfEU",
  },
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
        <Analytics />
        <Toaster />
        <MouseFlow />
      </body>
    </html>
  );
}
