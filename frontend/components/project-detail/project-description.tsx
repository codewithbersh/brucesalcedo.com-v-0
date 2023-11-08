import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { Project } from "@/config/projects";

type Props = {
  project: Project;
};

const ProjectDescription = ({ project }: Props) => {
  return (
    <div className="col-span-full flex flex-col gap-4">
      <div className="flex gap-8 ">
        <h1 className="font-bold">{project.title}</h1>
        <div className="flex gap-8 ml-auto">
          {project.links?.map((link) => (
            <Link
              className="underline text-muted-foreground underline-offset-2 hover:text-foreground transition-colors duration-300 ease-in-out"
              href={link.link}
              key={link.label}
              target="_blank"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-zinc-100 p-8">
        <Image
          src={project.heroImage}
          alt={project.title}
          className="max-h-[500px] object-contain"
          sizes="100vw"
          priority
          quality={75}
          placeholder="blur"
        />
      </div>

      <div className="w-fit mx-auto space-y-4 mt-4">
        <p className="max-w-prose">{project.description}</p>
        <Button asChild>
          <Link href={project.websiteLink} target="_blank">
            Visit website
          </Link>
        </Button>
      </div>
    </div>
  );
};

export { ProjectDescription };
