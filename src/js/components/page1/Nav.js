import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Nav = ({ anyArticles }) => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Math operations</a>
        </li>
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

Nav.propTypes = {
  anyArticles: PropTypes.bool.isRequired,
};

export default Nav;
