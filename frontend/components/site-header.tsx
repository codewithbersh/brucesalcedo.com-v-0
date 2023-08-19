import Link from "next/link";

import { MainNav } from "./main-nav";

import { routesConfig } from "@/config/routes";

const SiteHeader = () => {
  return (
    <div className="fixed border-b w-full top-0 left-0 bg-background z-50">
      <header className="container flex justify-between sm:grid grid-cols-12 gap-x-8 py-4 items-center">
        <Link
          href="/"
          className=" font-semibold leading-none sm:col-span-6 w-fit"
        >
          bersh
        </Link>
        <MainNav routes={routesConfig} className=" sm:col-span-6" />
      </header>
    </div>
  );
};

export { SiteHeader };
