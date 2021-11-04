import React from "react";
import { useForm } from "react-hook-form";
import { SearchContainer, Form, SearchBar, SearchButton } from "./SearchStyles";
import { BiSearchAlt } from "react-icons/bi";

interface Props {
  show: boolean;
  searchTerm: string;
  handleSearch: (searchTerm: string) => void;
}

type FormValues = {
  searchTerm: string;
  search: string;
};

const Search = ({ show, searchTerm, handleSearch }: Props) => {
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
            id={searchTerm}
          />
          <SearchButton {...register("search")} type="submit" value="Search" />
        </Form>
      )}
    </SearchContainer>
  );
};

export default Search;
