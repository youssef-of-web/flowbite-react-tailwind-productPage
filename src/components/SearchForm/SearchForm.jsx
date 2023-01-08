import { TextInput } from "flowbite-react";
import React from "react";
import ButtonGroup from "./Button";

function SearchForm() {
  return (
    <div className="search__form">
      <div className="flex flex-grow gap-x-3 justify-between">
        <TextInput id="email4" type="text" required={true} className="w-full" />
        <ButtonGroup name="search" />
      </div>
    </div>
  );
}

export default SearchForm;
