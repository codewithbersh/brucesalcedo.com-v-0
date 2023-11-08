type SkillType = {
  label: string;
  tech: string[];
};

type NextProjectType = {
  label: string;
  description: string;
  href: string;
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
      label: "ORM",
      tech: ["Prisma"],
    },
    {
      label: "Project Management",
      tech: ["Figma", "Notion"],
    },
  ],
  nextProjects: [
    {
      label: "tinychanges.me",
      description:
        "A habit tracker inspired by the book Atomic Habits by James Clear.",
      href: "https://tinychanges.me",
    },
    {
      label: "tracker.lol",
      description: "A personal finance tracker.",
      href: "https://tracker.lol",
    },
  ],
};
