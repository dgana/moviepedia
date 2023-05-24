import { FC } from "react";
import { fetchMovieDetail } from "../../lib/api";
import { useParams } from "react-router-dom";
import { FlexBox, Text } from "../../ui-kit/atoms";
import { useQuery } from "@tanstack/react-query";
import { IMAGE_URL } from "../../lib/constants";

const DetailPage: FC = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["movie-detail", id],
    queryFn: () => fetchMovieDetail(id),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <pre>{JSON.stringify(error)}</pre>;
  }

  const { title, poster_path, overview, release_date } = data;

  return (
    <div className="grid gap-6 grid-cols-5">
      <div>
        <img
          className="m-auto rounded"
          alt="movie poster"
          src={poster_path ? `${IMAGE_URL}/w300/${poster_path}` : "https://picsum.photos/id/51/300/450"}
        />
      </div>
      <div className="relative col-span-4">
        <FlexBox justify="between" align="center">
          <Text size="2xl" font="fugaz" className="my-0 text-slate-950">
            {title}
          </Text>
          <Text font="secular" className="text-slate-950 text-xl">
            {release_date}
          </Text>
        </FlexBox>
        <hr className="my-8" />
        <Text size="xl" className="text-slate-950">
          {overview}
        </Text>
      </div>
    </div>
  );
};

export default DetailPage;
