import React from "react";
import PropTypes from "prop-types";
import NavLink from "components/shared/NavLink";

const Content = ({ anyArticles }) => {
  return (
    <p className="mb-2">
      <NavLink to={`/page1${anyArticles ? "/all" : ""}`}>Articles</NavLink>
      <NavLink to={"/page1/assets"}>Assets</NavLink>
    </p>
  );
};

Content.propTypes = {
  anyArticles: PropTypes.bool.isRequired,
};

export default Content;
