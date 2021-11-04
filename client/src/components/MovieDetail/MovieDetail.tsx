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
  handleCloseMovieDetails,
}: Props) => {
  const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

  const [modalIsOpen, setIsOpen] = React.useState(showMovieDetail);

  function closeModal() {
    setIsOpen(false);
    handleCloseMovieDetails();
  }

  MovieModal.setAppElement("#root");

  return (
    <MovieDetailContainer>
      <MovieModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <Header>
          {currentMovie.title !== "" ? (
            <Title>{currentMovie.title}</Title>
          ) : (
            <></>
          )}
          <CloseButton onClick={closeModal}>
            <BiX size="1.7rem" />
          </CloseButton>
        </Header>
        {currentMovie.tagline !== "" ? (
          <Tagline>{currentMovie.tagline}</Tagline>
        ) : (
          <></>
        )}
        {currentMovie.backdrop_path !== null ? (
          <PosterPath
            src={`${BACKDROP_PATH}${currentMovie.backdrop_path}`}
            alt="movie backdrop"
          />
        ) : (
          <></>
        )}
        <DetailInfo>
          <ReleaseRating>
            <h3>
              Release Date:{" "}
              {currentMovie.release_date !== "" ? (
                <> {currentMovie.release_date} </>
              ) : (
                <>No Release Date</>
              )}
            </h3>
            {currentMovie.vote_average !== undefined ? (
              <h3>
                Rating:
                {currentMovie.vote_average !== 0 ? (
                  <>
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
                    /10.0{" "}
                  </>
                ) : (
                  <> Not rated</>
                )}
              </h3>
            ) : (
              <></>
            )}
          </ReleaseRating>
          <Overview>
            <h3>Overview</h3>
            {currentMovie.overview !== null ? (
              <>{currentMovie.overview}</>
            ) : (
              <>No description available</>
            )}
          </Overview>
        </DetailInfo>
      </MovieModal>
    </MovieDetailContainer>
  );
};

export default MovieDetail;
