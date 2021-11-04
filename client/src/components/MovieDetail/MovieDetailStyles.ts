import styled from "styled-components";
import Modal from "react-modal";

export const MovieDetailContainer = styled.div`
  padding-top: 66px;
  // display: flex;
  // flex: 1;
  // justlifycontent: center;
  // alignitems: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: hsl(0, 0%, 13%);
`;

export const CloseButton = styled.button`
  background: none;
  color: white;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: flex;
  align-items: center;
  :hover {
    color: aqua;
  }
`;

export const PosterPath = styled.img`
  width: 100%;
`;

export const MovieModal = styled(Modal)`
  width: 500px !important;
  height: auto !important;
  position: absolute;
  background: white;
`;

export const DetailInfo = styled.div`
  font-family: Work Sans;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  padding-left: 10px;
`;

export const Tagline = styled.div`
  font-size: 1.25rem;
  font-style: italic;
  padding-left: 10px;
  padding-right: 20px;
`;

export const ReleaseRating = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 20px;
  font-size: 0.8rem;
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
