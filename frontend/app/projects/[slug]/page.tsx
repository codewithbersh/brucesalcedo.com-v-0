import { notFound } from "next/navigation";

import { PageWrapper } from "@/components/page-wrapper";
import { ProjectDescription } from "@/components/project-detail/project-description";
import { ProjecTechStack } from "@/components/project-detail/project-tech-stack";
import { ProjectGallery } from "@/components/project-detail/project-gallery";

import { projects } from "@/config/projects";

type Props = {
  params: {
    slug: string;
  };
};

const ProjectDetailPage = ({ params: { slug } }: Props) => {
  const key = Object.keys(projects).find(
    (project) => project === slug.toLowerCase()
  );

  if (!key) notFound();

  const project = projects[key as keyof typeof projects];

  return (
    <PageWrapper>
      <ProjectDescription project={project} />
      <ProjecTechStack techStack={project.techStack} />
      <ProjectGallery gallery={project.gallery} />
    </PageWrapper>
  );
};

export default ProjectDetailPage;
