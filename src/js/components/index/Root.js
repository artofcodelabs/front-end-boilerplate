import React from "react";
import { useMatches } from "react-router-dom";

import Nav from "components/shared/Nav";
import Calcs from "./Calcs";

const Root = () => {
  const matches = useMatches();

  let active = "index";
  switch (matches[0].pathname) {
    case "/squaring.html":
      active = "squaring";
      break;
    case "/cubing.html":
      active = "cubing";
      break;
  }

  return (
    <div>
      <Nav page="index" active={active} />
      <Calcs active={active} />
    </div>
  );
};

export default Root;
