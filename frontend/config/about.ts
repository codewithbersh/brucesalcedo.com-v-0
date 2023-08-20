type SkillType = {
  label: string;
  tech: string[];
};

type NextProjectType = {
  label: string;
  description: string;
};

type AboutConfigType = {
  skills: SkillType[];
  nextProjects: NextProjectType[];
};

export const aboutConfig: AboutConfigType = {
  skills: [
    {
      label: "Frontend",
      tech: ["TypeScript", "React", "NextJS"],
    },
    {
      label: "Backend",
      tech: ["Python", "Django", "Django Rest Framework"],
    },
    {
      label: "Styling",
      tech: ["CSS", "Tailwind", "Sass"],
    },
    {
      label: "Project Management",
      tech: ["Figma", "Notion"],
    },
  ],
  nextProjects: [
    {
      label: "Online Store",
      description: "E-commerce store and dashboard with payment integration",
    },
    {
      label: "Chatbot",
      description: "AI Chatbot powered by OpenAi",
    },
  ],
};
