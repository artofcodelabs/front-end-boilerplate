import React from "react";
import { useLoaderData } from "react-router-dom";

import { square } from "services/math";

const Square = () => {
  const number = useLoaderData();

  return (
    <p>
      {number} squared is {square(number)}
    </p>
  );
};

export default Square;
