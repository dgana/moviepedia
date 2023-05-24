import { VariantProps, cva } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";
import { cn } from "../../../lib/utils";

const cardVariants = cva("rounded text-white cursor-pointer", {
  variants: {
    type: {
      default: "",
    },
  },
  defaultVariants: {
    type: "default",
  },
});

export interface CardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

const Card: FC<CardProps> = ({ type, className, children, ...props }) => {
  return (
    <div className={cn(cardVariants({ type, className }))} {...props}>
      {children}
    </div>
  );
};

export default Card;
