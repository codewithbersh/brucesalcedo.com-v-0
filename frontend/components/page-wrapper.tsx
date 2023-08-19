"use client";

import { ComponentProps } from "react";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = ComponentProps<"div"> & {
  className?: string;
  children?: React.ReactNode;
};

const PageWrapper = ({ children, className, ...props }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div
        className={cn(
          " container  grid grid-cols-1 md:grid-cols-12 pt-12 sm:pt-24 pb:24 sm:pb-48 gap-x-8 gap-y-48 overflow-hidden",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </motion.div>
  );
};

export { PageWrapper };
