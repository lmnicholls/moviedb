import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: hsl(0, 0%, 13%);
  color: whitesmoke;
  padding: 10px;
  position: fixed;
  z-index: 999;
  margin: 0;
  width: 100%;
`;

export const Logo = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  padding-left: 10px;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  padding-right: 40px;
`;

export const Span = styled.span`
  color: whitesmoke;
  font-family: Train One;
  font-weight: 600;
  font-size: 2rem;
  align-items: center;
  padding-left: 5px;
`;

export const SearchButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: flex;
  align-items: center;
  :hover {
    color: aquamarine;
  }
`;
