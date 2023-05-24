import { FC, HTMLAttributes } from "react";
import { Card, Text } from "../../atoms";
import { IMAGE_URL } from "../../../lib/constants";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import { APIResult } from "../../../lib/api";
import React from "react";
import { InfiniteData } from "@tanstack/react-query";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const datagridVariants = cva("grid gap-8", {
  variants: {
    type: {
      default: "grid-cols-fill-300",
    },
  },
  defaultVariants: {
    type: "default",
  },
});

export interface MovieGridProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof datagridVariants> {
  data: InfiniteData<APIResult | undefined> | undefined;
}

const MovieGrid: FC<MovieGridProps> = ({ data, type, className, ...props }) => {
  return (
    <div className={cn(datagridVariants({ type, className }))} {...props}>
      {data &&
        data.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page?.results.map(({ title, poster_path, id }) => (
              <Card data-testid={id} key={id}>
                <LazyLoadImage
                  className="m-auto rounded"
                  width={300}
                  height={450}
                  alt="movie poster"
                  placeholderSrc={"https://picsum.photos/id/51/300/300"}
                  src={poster_path ? `${IMAGE_URL}/w300/${poster_path}` : "https://picsum.photos/id/51/300/450"}
                />
                <Text size="xl" font="secular" className="text-slate-900 font-extrabold">
                  {title}
                </Text>
              </Card>
            ))}
          </React.Fragment>
        ))}
    </div>
  );
};

export default MovieGrid;
