import React from "react";
import { HeaderContainer, Span } from "./HeaderStyles";
import { BiMoviePlay } from "react-icons/bi";

const Header = () => {
  return (
    <HeaderContainer>
      <BiMoviePlay size="2rem" />
      <Span>MovieDB</Span>
    </HeaderContainer>
  );
};

export default Header;
