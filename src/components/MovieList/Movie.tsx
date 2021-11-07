import React from "react";
import { Poster, NoImg } from "./MovieStyles";

interface Props {
  id: number;
  title: string;
  img: string;
  handleShowMovieDetails: (id: any) => void;
}

function Movie({ id, title, img, handleShowMovieDetails }: Props) {
  const POSTER_PATH = "http://image.tmdb.org/t/p/w185";

  const handleMovieClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    handleShowMovieDetails(id);
  };

  return (
    <div key={id} onClick={(event) => handleMovieClick(event)}>
      {img ? (
        <Poster src={`${POSTER_PATH}${img}`} alt={title} />
      ) : (
        <NoImg>{title}</NoImg>
      )}
    </div>
  );
}

export default Movie;
