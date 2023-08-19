import { StaticImageData } from "next/image";
import {
  teamSpaceMockupMac,
  useBrainMockupIphone,
  westLagoonMockupIpad,
  teamSpaceMockupIphone,
  teamSpaceManageAssignee,
  teamSpaceTicketInformation,
} from "@/public/images";

export type Project = {
  title: string;
  description: string;
  fullSpan?: true;
  homeImageDisplay: StaticImageData;
  mobileImageDisplay?: StaticImageData;
  href: string;
  heroImage?: StaticImageData;
  techStack?: Array<{ label: string; tech: string }>;
  links?: Array<{ label: string; link: string }>;
  gallery?: GalleryItem[];
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
      { label: "Figma", link: "/" },
      { label: "Github", link: "/" },
    ],
    gallery: [
      { img: teamSpaceMockupIphone },
      { img: teamSpaceManageAssignee },
      { img: teamSpaceTicketInformation, fullSpan: true },
    ],
  },
  "use-brain": {
    title: "Usebrain",
    description: "Interactive quiz platform...",
    homeImageDisplay: useBrainMockupIphone,
    href: "use-brain",
  },
  "west-lagoon": {
    title: "West Lagoon",
    description: "A platform for exploring...",
    homeImageDisplay: westLagoonMockupIpad,
    href: "west-lagoon",
  },
};
