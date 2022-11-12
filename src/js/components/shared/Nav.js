import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Index</NavLink>
          <ul>
            <li>
              <NavLink to={"squaring"}>Squaring</NavLink>
            </li>
            <li>
              <NavLink to={"cubing"}>Cubing</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <a href="page1.html">Page 1</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
