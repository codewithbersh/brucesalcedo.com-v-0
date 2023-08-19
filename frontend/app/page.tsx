import Link from "next/link";

import { PageWrapper } from "@/components/page-wrapper";
import { ProjectsList } from "@/components/projects-list";
import { Button } from "@/components/ui/button";

import { projects } from "@/config/projects";

const HomePage = () => {
  return (
    <PageWrapper>
      <section className="col-span-full space-y-8 md:col-span-6">
        <div>
          <h1 className="font-bold">Bruce Salcedo</h1>
          <p className="italic text-muted-foreground">Web Developer</p>
          <br />
          <p className="max-w-prose">
            A full-stack web developer who loves to craft efficient and
            effective website applications. This portfolio showcases the sites
            I&apos;ve designed and developed, primarily utilizing NextJS,
            Django, and Tailwind.
          </p>
          <br />
          <p className="max-w-prose">
            I am open to full-time positions and freelance opportunities. If
            you&apos;re seeking a developer, feel free to get in touch.
          </p>
        </div>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/contact">Contact</Link>
          </Button>
          <Button variant="ghost">Read.cv</Button>
        </div>
      </section>
      <ProjectsList projects={projects} />
    </PageWrapper>
  );
};

export default HomePage;
