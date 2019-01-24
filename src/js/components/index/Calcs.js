import React from "react";
import PropTypes from "prop-types";

import * as mathFunc from "helpers/math";

const cubed = x => (
  <p>
    {x} cubed is {mathFunc.cube(x)}
  </p>
);

const squared = x => (
  <p>
    {x} squared is {mathFunc.square(x)}
  </p>
);

const Calcs = ({ active }) => {
  if (active === "squaring") return squared(9);

  if (active === "cubing") return cubed(3);

  return (
    <div>
      {cubed(3)}
      {squared(9)}
    </div>
  );
};

Calcs.propTypes = {
  active: PropTypes.string.isRequired
};

export default Calcs;
