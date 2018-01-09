import React from "react";

import { square } from "helpers/math";
import Logo from "logo.png";

const Assets = () => (
  <div>
    <h2>Assets</h2>

    <p className="with-background with-border">4 squared is {square(4)}</p>

    <p className="with-border">
      <img src={Logo} alt="logo" />
    </p>
  </div>
);

export default Assets;
