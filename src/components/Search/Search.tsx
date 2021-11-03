import React from "react";
import { useForm } from "react-hook-form";
import { SearchContainer } from "./SearchStyles";

interface Props {
  show: boolean;
  setShow: (active: boolean) => void;
}

const Search = ({ show, setShow }: Props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <SearchContainer>
      {show ? (
        <div></div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("searchTerm")} /> <input type="submit" />
        </form>
      )}
    </SearchContainer>
  );
};

export default Search;
