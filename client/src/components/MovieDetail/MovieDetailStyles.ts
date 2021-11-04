import styled from "styled-components";
import Modal from "react-modal";

export const MovieDetailContainer = styled.div`
  padding-top: 66px;
  overflow-y: auto;
  .ReactModal__Content {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 50%;
    top: 50%;
    overflow: auto;
    background-color: #fff;
    -webkit-transform: translate(-50, -50%);
    transform: translate(-50, -50%);
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: hsl(0, 0%, 13%);
`;

export const CloseButton = styled.button`
  background: none;
  color: white;
  border: none;
  margin-right: 8px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: flex;
  align-items: center;
  :hover {
    color: red;
  }
`;

export const PosterPath = styled.img`
  width: 100%;
`;

export const MovieModal = styled(Modal)`
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  width: 50%;
  margin-right -50%;
  transform: translate(50%, 30%);
  overflow-y: auto;
  height: auto !important;
  outline: none;
  background-color: white !important;
`;

export const DetailInfo = styled.div`
  font-family: Work Sans;
  background-color: white;
`;

export const Title = styled.div`
  font-size: 2rem;
  padding-left: 10px;
  color: white;
  padding: 10px;
`;

export const Tagline = styled.div`
  font-size: 1rem;
  font-style: italic;
  padding: 5px 10px;
  background-color: rgb(56, 57, 59);
  color: white;
`;

export const ReleaseRating = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 20px;
  font-size: 0.8rem;
  h3 {
    margin: 0;
  }
`;

export const Overview = styled.div`
  h3 {
    text-decoration: underline;
    margin-bottom: 2px;
    margin-top: 0;
    font-size: 1.1rem;
  }
  padding: 10px;
`;
