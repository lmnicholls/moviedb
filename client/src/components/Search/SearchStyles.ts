import styled from "styled-components";

export const SearchContainer = styled.div`
  padding-top: 66px;
  position: fixed;
  z-index: 980;
  background-color: rgb(239, 239, 241);
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-flow: row;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const SearchBar = styled.input`
  background: none;
  color: inherit;
  border: none;
  padding-left: 5px;
  margin-right: 5px;
  font-size: 1.25rem;
  font-family: Work Sans;
  outline: inherit;
  flex-grow: 1;
`;

export const SearchButton = styled.input`
  background-color: rgb(110, 112, 115);
  box-sizing: border-box;
  color: whitesmoke;
  border: none;
  border-radius: 5px;
  padding: 5px;
  font-family: Work Sans;
  cursor: pointer;
  outline: inherit;
  width: 65px;
  :hover {
    background-color: rgb(56, 57, 59);
  }
`;

export const ClearButton = styled.button`
  background-color: rgb(110, 112, 115);
  box-sizing: border-box;
  color: whitesmoke;
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin-left: 5px;
  font-family: Work Sans;
  cursor: pointer;
  outline: inherit;
  width: 65px;
  height: 25px;
  :hover {
    background-color: rgb(56, 57, 59);
  }
`;
