import React from "react";
import ReactRouterPropTypes from "react-router-prop-types";

import Nav from "components/shared/Nav";
import Calcs from "./Calcs";

const Root = ({ match }) => (
  <div>
    <Nav page="index" active={match.params[0]} />
    <Calcs active={match.params[0] || "index"} />
  </div>
);

Root.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
};

export default Root;
