import { Button } from "flowbite-react";
import React from "react";

function ButtonGroup({ name }) {
  return (
    <div className="button__form">
      <Button>{name}</Button>
    </div>
  );
}

export default ButtonGroup;
