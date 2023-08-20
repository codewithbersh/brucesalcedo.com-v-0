import Link from "next/link";

import { MainNav } from "./main-nav";

import { routesConfig } from "@/config/routes";

const SiteHeader = () => {
  return (
    <div className="fixed border-b w-full top-0 left-0 bg-background z-50">
      <header className="container flex justify-between sm:grid grid-cols-12 gap-x-8 py-4 items-center">
        <Link
          href="/"
          className=" font-semibold leading-none sm:col-span-6 w-fit flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            style={{
              fill: "rgba(0, 0, 0, 1)",
              transform: "",
              msFilter: "",
            }}
          >
            <circle cx="17" cy="4" r="2"></circle>
            <path d="M15.777 10.969a2.007 2.007 0 0 0 2.148.83l3.316-.829-.483-1.94-3.316.829-1.379-2.067a2.01 2.01 0 0 0-1.272-.854l-3.846-.77a1.998 1.998 0 0 0-2.181 1.067l-1.658 3.316 1.789.895 1.658-3.317 1.967.394L7.434 17H3v2h4.434c.698 0 1.355-.372 1.715-.971l1.918-3.196 5.169 1.034 1.816 5.449 1.896-.633-1.815-5.448a2.007 2.007 0 0 0-1.506-1.33l-3.039-.607 1.772-2.954.417.625z"></path>
          </svg>
          bruce
        </Link>
        <MainNav routes={routesConfig} className=" sm:col-span-6" />
      </header>
    </div>
  );
};

export { SiteHeader };
