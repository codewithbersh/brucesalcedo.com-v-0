"use client";

import { ComponentProps } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { NavType } from "@/types/types";

type Props = ComponentProps<"nav"> & {
  routes: NavType[];
  className?: string;
};

const MainNav = ({ routes, className, ...props }: Props) => {
  const pathname = usePathname();

  return (
    <nav className={cn("flex gap-8", className)} {...props}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm leading-none font-medium hover:text-foreground transition-all duration-300 ease-in-out hover:underline underline-offset-4",
            pathname === route.href
              ? "text-foreground"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}

      <Link
        href="/contact"
        className={cn(
          "text-sm leading-none font-medium hover:text-foreground transition-all duration-300 ease-in-out hover:underline underline-offset-4 ml-auto md:hidden",
          pathname === "/contact" ? "text-foreground" : "text-muted-foreground"
        )}
      >
        Contact
      </Link>

      <Link
        href="/contact"
        className={cn(
          "text-sm leading-none font-medium hover:text-foreground transition-all duration-300 ease-in-out hover:underline underline-offset-4 ml-auto hidden md:inline",
          pathname === "/contact" ? "text-foreground" : "text-muted-foreground"
        )}
      >
        hello@brucesalcedo.com
      </Link>
    </nav>
  );
};

export { MainNav };
