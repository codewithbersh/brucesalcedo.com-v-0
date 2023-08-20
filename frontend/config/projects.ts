import { StaticImageData } from "next/image";
import {
  teamSpaceMockupMac,
  useBrainMockupIphone,
  westLagoonMockupIpad,
  teamSpaceMockupIphone,
  teamSpaceManageAssignee,
  teamSpaceTicketInformation,
  useBrainMockupDesktop,
  useBrainGameOver,
  useBrainExplore,
  westLagoonMockupMac,
  westLagoonContact,
  westLagoonFaqs,
} from "@/public/images";

export type Project = {
  title: string;
  description: string;
  websiteLink: string;
  fullSpan?: true;
  homeImageDisplay: StaticImageData;
  mobileImageDisplay?: StaticImageData;
  href: string;
  heroImage: StaticImageData;
  techStack: Array<{ label: string; tech: string }>;
  links: Array<{ label: string; link: string }>;
  gallery: GalleryItem[];
};

export type GalleryItem = {
  img: StaticImageData;
  fullSpan?: true;
};

export const projects: Record<string, Project> = {
  "team-space": {
    title: "Team Space",
    description:
      "A collaborative project management app that boosts teamwork and oversight. It offers secure authentication, user roles, and streamlined ticket management for efficient workflows and effective project development.",
    websiteLink: "https://teamspace-lac.vercel.app/",
    fullSpan: true,
    homeImageDisplay: teamSpaceMockupMac,
    href: "team-space",

    heroImage: teamSpaceMockupMac,
    techStack: [
      { label: "Frontend", tech: "NextJS" },
      { label: "Backend", tech: "Django" },
      { label: "Database", tech: "PostgreSQL" },
      { label: "Styling", tech: "Tailwind" },
    ],
    links: [
      {
        label: "Figma",
        link: "https://www.figma.com/file/kN00BA9TDNWaN7NTrBE0fY/Team-Space?type=design&node-id=0%3A1&mode=design&t=C7h7Y8S3rOYNuYOd-1",
      },
      { label: "Github", link: "https://github.com/codewithbersh/teamspace" },
    ],
    gallery: [
      { img: teamSpaceMockupIphone },
      { img: teamSpaceManageAssignee },
      { img: teamSpaceTicketInformation, fullSpan: true },
    ],
  },
  "use-brain": {
    title: "Usebrain",
    description:
      "Interactive quiz platform that enables users to create, participate in, and manage quizzes while keeping track of their progress. The platform offers a personalized dashboard, lesson creation, quiz exploration, and post-quiz analytics.",
    websiteLink: "https://use-brain.vercel.app/",
    homeImageDisplay: useBrainMockupIphone,
    href: "use-brain",
    heroImage: useBrainMockupDesktop,
    techStack: [
      { label: "Frontend", tech: "NextJS" },
      { label: "Backend", tech: "Django" },
      { label: "Database", tech: "PostgreSQL" },
      { label: "Styling", tech: "Tailwind" },
    ],
    links: [
      {
        label: "Figma",
        link: "https://www.figma.com/file/SQUrxbvpoqw3QU4yY7okS3/useBrain?type=design&node-id=0%3A1&mode=design&t=zDIB7izQgdy5GNPU-1",
      },
      { label: "Github", link: "https://github.com/codewithbersh/useBrain" },
    ],
    gallery: [
      { img: useBrainMockupIphone },
      { img: useBrainGameOver },
      { img: useBrainExplore, fullSpan: true },
    ],
  },
  "west-lagoon": {
    title: "West Lagoon",
    description:
      "A platform for exploring a diverse range of luxury properties. Users can effortlessly access details about various villas, including pricing, photographs, available amenities, and locations.",
    websiteLink: "https://www.westlagoonestates.com/",
    homeImageDisplay: westLagoonMockupIpad,
    href: "west-lagoon",
    heroImage: westLagoonMockupMac,
    techStack: [
      { label: "Frontend", tech: "NextJS" },
      { label: "Email", tech: "SendGrid" },
      { label: "Styling", tech: "Tailwind" },
    ],
    links: [
      {
        label: "Figma",
        link: "https://www.figma.com/file/W9a6dJBQ37KZvvIBPdAThp/WLE?type=design&node-id=111%3A705&mode=design&t=S4dyY89AgOcn3S9g-1",
      },
      {
        label: "Github",
        link: "https://github.com/codewithbersh/west-lagoon-estates",
      },
    ],
    gallery: [
      { img: westLagoonContact },
      { img: westLagoonMockupIpad },
      { img: westLagoonFaqs, fullSpan: true },
    ],
  },
};
