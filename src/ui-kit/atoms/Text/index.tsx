import { FC, HTMLAttributes } from "react";
import { cn } from "../../../lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const textVariants = cva("text-white", {
  variants: {
    size: {
      default: "text-sm",
      sm: "text-md",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
    },
    font: {
      default: "font-montserat",
      fugaz: "font-fugaz",
      secular: "font-secular",
    },
  },
  defaultVariants: {
    size: "default",
    font: "default",
  },
});

export interface TextProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textVariants> {}

const Text: FC<TextProps> = ({ className, size, font, children, ...props }) => {
  return (
    <p className={cn(textVariants({ size, font, className }))} {...props}>
      {children}
    </p>
  );
};

export default Text;
