import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Math operations</a>
        </li>
        <li>
          <NavLink to={`/page1`}>Page1</NavLink>
          <ul>
            <li>
              <NavLink to={`/page1/assets`}>Assets</NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
