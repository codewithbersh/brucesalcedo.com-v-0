import Link from "next/link";

import { PageWrapper } from "@/components/page-wrapper";

const NotFound = () => {
  return (
    <PageWrapper>
      <section className="col-span-full grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className=" md:col-span-1">
          <h1 className="font-bold">Something&apos;s missing</h1>
          <p className="italic text-muted-foreground max-w-[418px]">
            Error 404: Page not found
            <br />
            <br />
            We couldn&apos;t find the page you were looking for. View{" "}
            <Link href="/" className="text-foreground underline">
              my projects
            </Link>{" "}
            or learn more{" "}
            <Link href="/about" className="text-foreground underline">
              about me
            </Link>
          </p>
        </div>
      </section>
    </PageWrapper>
  );
};

export default NotFound;
