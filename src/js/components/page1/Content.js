import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import NavLink from "components/shared/NavLink";

const Content = ({ anyArticles }) => {
  const location = useLocation();
  const showArticles = location.pathname.match(/^\/page1\/articles/) !== null;

  return (
    <p className="mb-3">
      <NavLink
        to={`/page1/articles${anyArticles ? "/all" : ""}`}
        active={showArticles}
      >
        Articles
      </NavLink>
      <NavLink to={"/page1/assets"}>Assets</NavLink>
    </p>
  );
};

Content.propTypes = {
  anyArticles: PropTypes.bool.isRequired,
};

export default Content;
