import Link from "next/link";

import { siteConfig } from "@/config/site";
import { MainNav } from "./main-nav";

const SiteHeader = () => {
  return (
    <div className="fixed border-b w-full top-0 left-0 bg-background">
      <header className="container flex justify-between sm:grid grid-cols-12 gap-x-8 py-4 items-center">
        <Link href="/" className=" font-semibold leading-none sm:col-span-6">
          bersh
        </Link>
        <MainNav routes={siteConfig.nav} className=" sm:col-span-6" />
      </header>
    </div>
  );
};

export { SiteHeader };
