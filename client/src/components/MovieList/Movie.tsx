import React from "react";
import { Poster, NoImg } from "./MovieStyles";

interface Props {
  key: number;
  title: string;
  img: string;
  handleShowMovieDetails: (id: any) => void;
}

function Movie({ key, title, img, handleShowMovieDetails }: Props) {
  const POSTER_PATH = "http://image.tmdb.org/t/p/w185";

  return (
    <div onClick={(key) => handleShowMovieDetails(key)}>
      {img ? (
        <Poster src={`${POSTER_PATH}${img}`} alt={title} />
      ) : (
        <NoImg>{title}</NoImg>
      )}
    </div>
  );
}

export default Movie;
