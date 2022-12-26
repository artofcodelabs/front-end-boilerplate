import React from "react";
import { useLoaderData } from "react-router-dom";

import { cube } from "services/math";

const Cube = () => {
  const number = useLoaderData();

  return (
    <p>
      {number} cubed is {cube(number)}
    </p>
  );
};

export default Cube;
