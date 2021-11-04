import React from "react";
import {
  MovieDetailContainer,
  Header,
  CloseButton,
  PosterPath,
  MovieModal,
  DetailInfo,
  Title,
  Tagline,
  ReleaseRating,
  Overview,
} from "./MovieDetailStyles";
import { BiX } from "react-icons/bi";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "50%",
    height: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface Props {
  showMovieDetail: boolean;
  currentMovie: {
    title?: string;
    backdrop_path?: string;
    vote_average?: number;
    release_date?: string;
    poster_path?: string;
    tagline?: string;
    overview?: string;
  };
  handleShowMovieDetails: (id: number) => void;
  handleCloseMovieDetails: () => void;
}

MovieModal.setAppElement("#root");

const MovieDetail = ({
  showMovieDetail,
  currentMovie,
  handleShowMovieDetails,
  handleCloseMovieDetails,
}: Props) => {
  const POSTER_PATH = "http://image.tmdb.org/t/p/w185";
  const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

  console.log("currentmovie", currentMovie);

  const [modalIsOpen, setIsOpen] = React.useState(showMovieDetail);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    handleCloseMovieDetails();
  }

  return (
    <MovieDetailContainer>
      <MovieModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Header>
          <CloseButton onClick={closeModal}>
            <BiX size="1.25rem" />
          </CloseButton>
        </Header>
        {currentMovie.backdrop_path !== null ? (
          <PosterPath
            src={`${BACKDROP_PATH}${currentMovie.backdrop_path}`}
            alt="movie backdrop"
          />
        ) : (
          <></>
        )}
        <DetailInfo>
          <Title>{currentMovie.title}</Title>
          <Tagline>{currentMovie.tagline}</Tagline>
          <ReleaseRating>
            <h3>Release Date: {currentMovie.release_date}</h3>
            {currentMovie.vote_average !== undefined ? (
              <h3>
                Rating:
                {currentMovie.vote_average > 5.0 ? (
                  <span style={{ color: "green" }}>
                    {" "}
                    {currentMovie.vote_average}
                  </span>
                ) : (
                  <span style={{ color: "red" }}>
                    {" "}
                    {currentMovie.vote_average}
                  </span>
                )}
                / 10.0
              </h3>
            ) : (
              <></>
            )}
          </ReleaseRating>
          <Overview>
            <h3>Overview</h3>
            {currentMovie.overview}
          </Overview>
        </DetailInfo>
      </MovieModal>
    </MovieDetailContainer>
  );
};

export default MovieDetail;
