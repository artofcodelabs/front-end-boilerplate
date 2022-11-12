import React from "react";

import { cube } from "helpers/math";

const Cube = () => {
  const x = 3;

  return (
    <p>
      {x} cubed is {cube(x)}
    </p>
  );
};

export default Cube;
