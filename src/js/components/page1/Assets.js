import React from "react";

import { square } from "services/math";
import Logo from "logo.png";
import Loco from "loco.svg";

const Assets = () => (
  <div>
    <p className="with-background with-border mb-2 py-1 px-2">
      4 squared is {square(4)}
    </p>

    <p className="with-border mb-2 py-1 px-2">
      <img src={Logo} alt="AOC Logo" />
    </p>

    <p className="with-border max-w-lg">
      <img src={Loco} alt="Loco Logo" />
    </p>
  </div>
);

export default Assets;
