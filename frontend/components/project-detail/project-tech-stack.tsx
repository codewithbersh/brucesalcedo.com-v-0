import { Separator } from "@/components/ui/separator";

type Props = {
  techStack: {
    label: string;
    tech: string;
  }[];
};

const ProjecTechStack = ({ techStack }: Props) => {
  return (
    <div className="col-span-full flex gap-8 flex-col sm:flex-row sm:gap-24 sm:items-center">
      <h1 className="font-bold shrink-0">Tech Stack</h1>
      <Separator orientation="vertical" className="hidden sm:block" />
      <div className="flex gap-6 flex-col sm:flex-row sm:gap-x-24 sm:gap-y-6 flex-wrap">
        {techStack.map((tech) => (
          <div>
            <p className="text-muted-foreground">{tech.label}</p>
            <h1 className="font-bold">{tech.tech}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export { ProjecTechStack };
