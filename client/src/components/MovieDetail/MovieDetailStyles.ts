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
  inset: 40% auto auto 50% !important;
  width: 500px !important;
  height: auto !important;
  // top: 20%;
  // left: 50%;
  position: absolute;
  // right: auto;
  // bottom: auto;
  // margin-right: -50%;
  // transform: translate(-50%, -50%);
  background: white;
`;

export const DetailInfo = styled.div`
  font-family: Work Sans;
  h1 {
    font-size: 2.5rem;
    margin: 0;
  }
  h3 {
    font-size: 1 rem;
  }
`;
