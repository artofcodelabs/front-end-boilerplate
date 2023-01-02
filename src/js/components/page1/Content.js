import React from "react";
import PropTypes from "prop-types";
import NavLink from "components/shared/NavLink";

const Content = ({ anyArticles }) => {
  return (
    <>
      <NavLink to={`/page1${anyArticles ? "/all" : ""}`}>Page1</NavLink>
      <NavLink to={"/page1/assets"}>Assets</NavLink>
    </>
  );
};

Content.propTypes = {
  anyArticles: PropTypes.bool.isRequired,
};

export default Content;
