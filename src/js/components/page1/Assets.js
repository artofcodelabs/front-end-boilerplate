import React from "react";

import { square } from "services/math";
import Logo from "logo.png";

const Assets = () => (
  <div>
    <p className="with-background with-border mb-2">4 squared is {square(4)}</p>

    <p className="with-border">
      <img src={Logo} alt="logo" />
    </p>
  </div>
);

export default Assets;
