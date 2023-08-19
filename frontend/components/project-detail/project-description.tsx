import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { projectsDetailConfig } from "@/config/projects";

type Props = {
  project: (typeof projectsDetailConfig)["team-space"];
};

const ProjectDescription = ({ project }: Props) => {
  return (
    <div className="col-span-full flex flex-col gap-4">
      <div className="flex gap-8 ">
        <h1 className="font-bold">{project.title}</h1>
        <div className="flex gap-8 ml-auto">
          {project.links.map((link) => (
            <Link
              className="underline text-muted-foreground underline-offset-2 hover:text-foreground transition-colors duration-300 ease-in-out"
              href={link.link}
              key={link.link}
              target="_blank"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="aspect-video bg-zinc-100 px-8 py-16">
        <Image
          src={project.heroImage}
          alt={project.title}
          className=" object-contain sm:max-w-full"
          sizes="100vw"
        />
      </div>

      <div className="w-fit mx-auto space-y-4 mt-4">
        <p className="max-w-prose">{project.description}</p>
        <Button>Visit website</Button>
      </div>
    </div>
  );
};

export { ProjectDescription };
