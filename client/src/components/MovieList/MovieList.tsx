import React from "react";
import { MovieListContainer, NoResults } from "./MovieListStyles";
import Movie from "./Movie";

interface Props {
  results: Array<any>;
  handleShowMovieDetails: (id: number) => void;
}

const MovieList = ({ results, handleShowMovieDetails }: Props) => {
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

  return <MovieListContainer>{movieComponents}</MovieListContainer>;
};

export default MovieList;
