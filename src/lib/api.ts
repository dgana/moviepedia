import axios from "./instance";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  poster_path: string;
  id: number;
  title: string;
  overview: string;
  release_date: string;
}

export interface APIResult {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const fetchTopRatedMovies = (page = 1): Promise<APIResult> => {
  return axios.get(`/movie/top_rated?page=${page}`).then((resp) => resp.data);
};

export const searchMovies = (query: string, page = 1): Promise<APIResult> => {
  return axios.get(`/search/movie?query=${query}&page=${page}`).then((resp) => resp.data);
};

export const fetchMovieDetail = (movieId?: string): Promise<Movie> => {
  return axios.get(`/movie/${movieId}`).then((resp) => resp.data);
};
