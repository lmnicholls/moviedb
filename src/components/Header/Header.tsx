import React from "react";
import {
  HeaderContainer,
  Logo,
  SearchContainer,
  Span,
  SearchButton,
} from "./HeaderStyles";
import { BiMoviePlay, BiSearchAlt, BiX } from "react-icons/bi";

interface Props {
  show: boolean;
  handleShow: () => void;
}

const Header = ({ show, handleShow }: Props) => {
  return (
    <HeaderContainer>
      <Logo>
        <BiMoviePlay size="2rem" />
        <Span>MovieDB</Span>
      </Logo>
      <SearchContainer>
        <SearchButton onClick={() => handleShow()}>
          {show ? (
            <>
              <BiSearchAlt size="2rem" /> <span>Find A Movie</span>
            </>
          ) : (
            <BiX size="2rem" />
          )}
        </SearchButton>
      </SearchContainer>
    </HeaderContainer>
  );
};

export default Header;
