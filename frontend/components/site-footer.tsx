import Link from "next/link";

import { socialsConfig } from "@/config/socials";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentProps<"footer"> & {
  className?: string;
};

const SiteFooter = ({ className, ...props }: Props) => {
  return (
    <footer className={cn("container", className)} {...props}>
      <div className="border-t py-12 space-y-8">
        <div className="flex flex-col gap-2">
          <p className="max-w-prose">
            Let&apos;s create something memorable and timeless together.
          </p>
          <Link href="/" className="w-fit hover:underline underline-offset-4">
            hi@bersh.dev
          </Link>
        </div>

        <div className="flex gap-4 sm:gap-10 sm:flex-row flex-col">
          <div className="flex gap-10 text-muted-foreground">
            {socialsConfig.map((social) => (
              <Link
                key={social.link}
                href={social.link}
                className="hover:text-foreground transition-colors duration-300 ease-in-out"
              >
                {social.label}
              </Link>
            ))}
          </div>
          <p className="sm:ml-auto">© 2023 Bruce Salcedo</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
