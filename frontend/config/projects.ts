import { StaticImageData } from "next/image";
import {
  teamSpaceMockupMac,
  useBrainMockupIphone,
  westLagoonMockupIpad,
  teamSpaceMockupIphone,
} from "@/public/images";

type ProjectConfig = {
  title: string;
  description: string;
  fullSpan?: true;
  homeImageDisplay: StaticImageData;
  mobileImageDisplay?: StaticImageData;
  href: string;
};

export type ProjectsConfig = {
  teamSpace: ProjectConfig;
  useBrain: ProjectConfig;
  westLagoon: ProjectConfig;
};

export const projectsConfig: ProjectsConfig = {
  teamSpace: {
    title: "Team Space",
    description:
      "A collaborative project management app that boosts teamwork and oversight. It offers secure authentication, user roles, and streamlined ticket management for efficient workflows and effective project development.",
    fullSpan: true,
    homeImageDisplay: teamSpaceMockupMac,
    mobileImageDisplay: teamSpaceMockupIphone,
    href: "team-space",
  },
  useBrain: {
    title: "Usebrain",
    description:
      "Interactive quiz platform that enables users to create, participate in, and manage quizzes while keeping track of their progress. The platform offers a personalized dashboard, lesson creation, quiz exploration, and post-quiz analytics.",
    homeImageDisplay: useBrainMockupIphone,
    href: "use-brain",
  },
  westLagoon: {
    title: "West Lagoon",
    description:
      "A platform for exploring a diverse range of luxury properties. Users can effortlessly access details about various villas, including pricing, photographs, available amenities, and locations.",
    homeImageDisplay: westLagoonMockupIpad,
    href: "west-lagoon",
  },
};
