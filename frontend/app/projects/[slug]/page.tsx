import Link from "next/link";
import { notFound } from "next/navigation";

import { PageWrapper } from "@/components/page-wrapper";
import { ProjectDescription } from "@/components/project-detail/project-description";
import { ProjecTechStack } from "@/components/project-detail/project-tech-stack";
import { ProjectGallery } from "@/components/project-detail/project-gallery";
import { Button } from "@/components/ui/button";

import { projects } from "@/config/projects";

type Props = {
  params: {
    slug: string;
  };
};

const ProjectDetailPage = ({ params: { slug } }: Props) => {
  const keys = Object.keys(projects);
  const key = keys.find((project) => project === slug.toLowerCase());
  const index = keys.findIndex((project) => project === slug.toLowerCase());

  if (!key) notFound();

  const project = projects[key as keyof typeof projects];

  let nextKey;
  if (index !== -1) {
    if (index < keys.length - 1) {
      nextKey = keys[index + 1];
    } else {
      nextKey = keys[0];
    }
  }

  return (
    <PageWrapper>
      <ProjectDescription project={project} />
      <ProjecTechStack techStack={project.techStack} />
      <ProjectGallery gallery={project.gallery} />
      <div className="col-span-full flex justify-center">
        <Button asChild variant="outline">
          <Link href={`/projects/${nextKey}`}>Next Project</Link>
        </Button>
      </div>
    </PageWrapper>
  );
};

export default ProjectDetailPage;
