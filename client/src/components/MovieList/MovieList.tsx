import React from "react";
import { MovieListContainer, NoResults } from "./MovieListStyles";
import Movie from "./Movie";
import InfiniteScroll from "react-infinite-scroller";

interface Props {
  results: Array<any>;
  handleShowMovieDetails: (id: number) => void;
  fetchMoreMovies: () => void;
  totalPages: number;
  hasMoreMovies: boolean;
}

const MovieList = ({
  results,
  handleShowMovieDetails,
  fetchMoreMovies,
  totalPages,
  hasMoreMovies,
}: Props) => {
  if (results.length === 0) {
    return <NoResults>No Results Found. Please try again.</NoResults>;
  }

  const movieComponents = results.map((movie) => {
    return (
      <Movie
        id={movie.id}
        key={movie.id}
        title={movie.title}
        img={movie.poster_path}
        handleShowMovieDetails={handleShowMovieDetails}
      />
    );
  });

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={fetchMoreMovies}
      hasMore={hasMoreMovies}
      loader={<h4>Loading...</h4>}
      // scrollableTarget={MovieListContainer}
    >
      <MovieListContainer>{movieComponents}</MovieListContainer>
    </InfiniteScroll>
  );
};

export default MovieList;
