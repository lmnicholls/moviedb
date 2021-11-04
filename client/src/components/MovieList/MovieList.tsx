import React from "react";
import { MovieListContainer } from "./MovieListStyles";
import Movie from "./Movie";

interface Props {
  results: Array<any>;
}

const MovieList = ({ results }: Props) => {
  const movieComponents = results.map((movie) => {
    return (
      <Movie
        id={movie.id}
        key={movie.id}
        title={movie.title}
        img={movie.poster_path}
      />
    );
  });
  console.log(results);
  return <MovieListContainer>{movieComponents}</MovieListContainer>;
};

export default MovieList;
