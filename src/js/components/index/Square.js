import React from "react";

import { square } from "helpers/math";

const Square = () => {
  const x = 9;

  return (
    <p>
      {x} squared is {square(x)}
    </p>
  );
};

export default Square;
