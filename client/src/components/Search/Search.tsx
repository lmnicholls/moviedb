import React from "react";
import { useForm } from "react-hook-form";
import {
  SearchContainer,
  Form,
  SearchBar,
  SearchButton,
  ClearButton,
} from "./SearchStyles";
import { BiSearchAlt } from "react-icons/bi";

interface Props {
  show: boolean;
  searchTerm: string;
  handleSearch: (searchTerm: string) => void;
  handleClear: () => void;
}

type FormValues = {
  searchTerm: string;
  search: string;
};

const Search = ({ show, searchTerm, handleSearch, handleClear }: Props) => {
  const { register, handleSubmit } = useForm<FormValues>();

  return (
    <SearchContainer>
      {show ? (
        <div></div>
      ) : (
        <Form
          onSubmit={handleSubmit((data) => {
            handleSearch(data.searchTerm);
          })}
        >
          <BiSearchAlt width="25px" size="1.25rem" />
          <SearchBar
            placeholder="enter movie title"
            {...register("searchTerm")}
            required
            id={searchTerm}
          />
          <SearchButton {...register("search")} type="submit" value="Search" />
          <ClearButton type="reset" onClick={() => handleClear()}>
            Clear
          </ClearButton>
        </Form>
      )}
    </SearchContainer>
  );
};

export default Search;
