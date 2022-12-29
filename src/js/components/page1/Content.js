import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Content = ({ anyArticles }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={`/page1${anyArticles ? "/all" : ""}`}>Page1</NavLink>
          <ul>
            <li>
              <NavLink to={"/page1/assets"}>Assets</NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

Content.propTypes = {
  anyArticles: PropTypes.bool.isRequired,
};

export default Content;
