import Image, { StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

type Props = {
  gallery: {
    img: StaticImageData;
    fullSpan?: true;
  }[];
};

const ProjectGallery = ({ gallery }: Props) => {
  return (
    <div className="col-span-full grid grid-cols-2 gap-8">
      {gallery.map((image, index) => (
        <div
          key={index}
          className={cn(
            "bg-zinc-100 aspect-square grid place-items-center px-8",
            image.fullSpan
              ? "col-span-full sm:aspect-video sm:py-8"
              : "col-span-full sm:col-span-1"
          )}
        >
          <Image src={image.img} alt="Gallery" />
        </div>
      ))}
    </div>
  );
};

export { ProjectGallery };
