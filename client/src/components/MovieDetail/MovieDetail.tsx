import React from "react";
import Modal from "react-modal";
import { MovieDetailContainer } from "./MovieDetailStyles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface Props {
  showMovieDetail: boolean;
  handleShowMovieDetails: (id: number) => void;
  handleCloseMovieDetails: () => void;
}

Modal.setAppElement("#root");

const MovieDetail = ({
  showMovieDetail,
  handleShowMovieDetails,
  handleCloseMovieDetails,
}: Props) => {
  // const POSTER_PATH = "http://image.tmdb.org/t/p/w185";
  // const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(showMovieDetail);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
    handleCloseMovieDetails();
  }

  return (
    <MovieDetailContainer>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
      </Modal>
    </MovieDetailContainer>
  );
};

export default MovieDetail;
