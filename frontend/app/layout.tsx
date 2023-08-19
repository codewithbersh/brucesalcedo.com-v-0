import type { Metadata } from "next";

import "@/styles/globals.css";
import { Raleway } from "next/font/google";

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
      <body className={raleway.className}>{children}</body>
    </html>
  );
}