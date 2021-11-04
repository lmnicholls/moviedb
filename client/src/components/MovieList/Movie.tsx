import React from "react";
import { Poster, NoImg } from "./MovieStyles";

interface Props {
  id: number;
  key: number;
  title: string;
  img: string;
}

const POSTER_PATH = "http://image.tmdb.org/t/p/w185";

function Movie({ id, key, title, img }: Props) {
  return (
    <div>
      {img ? (
        <Poster src={`${POSTER_PATH}${img}`} alt={title} />
      ) : (
        <NoImg>{title}</NoImg>
      )}
    </div>
  );
}

export default Movie;
