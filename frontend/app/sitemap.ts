import { siteConfig } from "@/config/site";
import { projects } from "@/config/projects";

export default async function sitemap() {
  const baseUrl = siteConfig.url;
  const keys = Object.keys(projects);
  const projectsUrl = keys.map((key) => ({
    url: `${baseUrl}/projects/${key}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    ...projectsUrl,
  ];
}
