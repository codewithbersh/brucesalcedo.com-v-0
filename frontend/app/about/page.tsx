import { Fragment } from "react";
import Link from "next/link";
import { Metadata } from "next";

import { PageWrapper } from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";

import { aboutConfig } from "@/config/about";

export const metadata: Metadata = {
  title: "About",
};

const AboutPage = () => {
  const skills = aboutConfig.skills;
  const nextProjects = aboutConfig.nextProjects;
  return (
    <PageWrapper>
      <section className="col-span-full grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className=" md:col-span-1">
          <h1 className="font-bold">About Bruce</h1>
          <Link
            href="https://read.cv/brucesalcedo"
            className="italic text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors duration-300 ease-in-out"
            target="_blank"
          >
            Read.cv
          </Link>
        </div>
        <div className="space-y-8 md:col-span-1">
          <p className="max-w-prose">
            Hey. My name is Bruce Salcedo, a web developer based in Qatar. I am
            passionate in creating digital experiences that are not only
            efficient but elegantly simple. Embracing the &apos;less is
            more&apos; mantra, I prioritize minimalist designs driven by
            quality.
            <br />
            <br />
            Passionate in learning, hungry for growth. Constantly on the lookout
            for new learning opportunities, always believing that each day
            brings a new lesson.
            <br />
            <br />
            <span className="italic">
              Open to full-time positions and freelance opportunities.
            </span>
          </p>
          <Button asChild>
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </section>

      <section className="col-span-full grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className=" md:col-span-1">
          <h1 className="font-medium">Technical Skills</h1>
        </div>
        <div className="space-y-8 md:col-span-1">
          {skills.map((skill) => (
            <div key={skill.label}>
              <h1 className="font-medium">{skill.label}</h1>
              <p className="text-muted-foreground">
                {skill.tech.map((tech, index) => (
                  <Fragment key={tech}>
                    {tech}
                    {skill.tech.length !== index + 1 && ","}{" "}
                  </Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="col-span-full grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className=" md:col-span-1">
          <h1 className="font-medium">What I&apos;m currently building</h1>
        </div>
        <div className="space-y-8 md:col-span-1">
          {nextProjects.map((project) => (
            <div key={project.label}>
              <Link
                href={project.href}
                className="font-medium underline text-blue-500"
                target="_blank"
              >
                {project.label}
              </Link>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default AboutPage;
