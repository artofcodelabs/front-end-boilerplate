import React from "react";
import ReactRouterPropTypes from "react-router-prop-types";

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

NoMatch.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default NoMatch;
