import { useInfiniteQuery } from "@tanstack/react-query";
import { FC } from "react";
import { APIResult, fetchTopRatedMovies, searchMovies } from "../../lib/api";
import { Datagrid } from "../../ui-kit/organisms";
import React from "react";
import { useInView } from "react-intersection-observer";
import useForm from "../../hooks/useForm";
import SearchInput from "../../ui-kit/molecules/SearchInput";
import useDebounce from "../../hooks/useDebounce";

const getNextPageParam = (lastPage: APIResult) => (lastPage.total_pages > lastPage.page ? lastPage.page + 1 : undefined);

const HomePage: FC = () => {
  const { ref, inView } = useInView();
  const [{ search }, onChange] = useForm({ search: "" });
  const debouncedSearchMovie = useDebounce(search, 1000);

  const { data, isLoading, isError, error, fetchNextPage } = useInfiniteQuery({
    enabled: !debouncedSearchMovie,
    queryKey: ["movies-top-rated"],
    queryFn: ({ pageParam = 1 }) => fetchTopRatedMovies(pageParam),
    getNextPageParam,
  });

  const { data: searchData, fetchNextPage: searchFetchNextPage } = useInfiniteQuery({
    enabled: !!debouncedSearchMovie,
    queryKey: ["movies-top-rated", debouncedSearchMovie],
    queryFn: ({ pageParam = 1 }) => searchMovies(debouncedSearchMovie, pageParam),
    getNextPageParam,
  });

  React.useEffect(() => {
    if (inView) {
      if (debouncedSearchMovie) {
        searchFetchNextPage();
      } else {
        fetchNextPage();
      }
    }
  }, [inView, fetchNextPage, debouncedSearchMovie, searchFetchNextPage]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <pre>{JSON.stringify(error)}</pre>;
  }

  return (
    <>
      <SearchInput search={search} onChange={onChange} />
      <Datagrid data={debouncedSearchMovie ? searchData : data} />
      {/* Pagination boundary to fetch more */}
      <div ref={ref} />
    </>
  );
};

export default HomePage;
