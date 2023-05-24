import { VariantProps, cva } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";
import { cn } from "../../../lib/utils";

const flexBoxVariants = cva("flex", {
  variants: {
    justify: {
      default: "justify-start",
      between: "justify-between",
    },
    align: {
      default: "items-start",
      center: "items-center",
    },
  },
  defaultVariants: {
    justify: "default",
    align: "default",
  },
});

export interface FlexBoxProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof flexBoxVariants> {}

const FlexBox: FC<FlexBoxProps> = ({ justify, align, className, children, ...props }) => {
  return (
    <div className={cn(flexBoxVariants({ justify, align, className }))} {...props}>
      {children}
    </div>
  );
};

export default FlexBox;
