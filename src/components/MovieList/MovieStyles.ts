import styled from "styled-components";

export const Poster = styled.img`
  box-shadow: 0 0 30px white;
  padding: 2px;
  margin: 2px;
  &:hover {
    transform: scale(1.06);
    transition-duration: 300ms;
  }
`;

export const NoImg = styled.div`
  width: 185px;
  height: 278px;
  background-color: rgb(61, 62, 64);
  display: flex;
  font-family: Work Sans;
  font-size: 2vw;
  font-weight: 600;
  color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2px;
  margin: 2px;
  &:hover {
    transform: scale(1.06);
    transition-duration: 300ms;
  }
`;
