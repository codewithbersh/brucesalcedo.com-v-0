import Link from "next/link";
import Image from "next/image";

import { Button } from "./ui/button";

import { ProjectsConfig } from "@/config/projects";
import { cn } from "@/lib/utils";

type Props = {
  projectsConfig: ProjectsConfig;
};

const ProjectsList = ({ projectsConfig }: Props) => {
  const projectConfigKeys = Object.keys(projectsConfig);

  return (
    <>
      {projectConfigKeys.map((key) => {
        const project = projectsConfig[key as keyof typeof projectsConfig];
        return (
          <>
            <div
              key={key}
              className={cn(
                "col-span-full grid grid-cols-12 gap-x-8 gap-y-12 overflow-hidden",
                project.fullSpan && "md:hidden"
              )}
            >
              <div className="col-span-full md:col-span-6 space-y-4">
                <h1 className="font-semibold">{project.title}</h1>
                <p className="max-w-prose md:pr-8">{project.description}</p>
                <Button variant="outline">Learn more</Button>
              </div>
              <Link
                className="col-span-full md:col-span-6"
                href={`/projects/${project.href}`}
                passHref
              >
                <div className="bg-zinc-100 aspect-square py-8 group overflow-hidden px-8 grid place-items-center md:place-items-start md:block">
                  <Image
                    src={
                      project.mobileImageDisplay
                        ? project.mobileImageDisplay
                        : project.homeImageDisplay
                    }
                    alt={project.title}
                    sizes="100vw"
                    className="object-contain max-h-full group-hover:scale-[102%] transition-all duration-300 ease-in-out "
                  />
                </div>
              </Link>
            </div>

            <div
              className={
                project.fullSpan
                  ? "hidden col-span-full md:flex flex-col gap-4"
                  : "hidden"
              }
            >
              <h1 className="font-semibold">{project.title}</h1>
              <Link
                className="col-span-full "
                href={`/projects/${project.href}`}
                passHref
              >
                <div className="aspect-video bg-zinc-100 py-16 group">
                  <Image
                    src={project.homeImageDisplay}
                    alt={project.title}
                    className="object-contain max-h-full group-hover:scale-[102%] ease-in-out duration-300 transition-all"
                    sizes="100vw"
                  />
                </div>
              </Link>
              <div className="max-w-fit mx-auto space-y-4 mt-8">
                <p className="max-w-prose">{project.description}</p>
                <Button variant="outline">Learn more</Button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export { ProjectsList };
