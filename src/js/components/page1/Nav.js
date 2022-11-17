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
          <a href="#" className="active">
            Page 1
          </a>
          <ul>
            <li>
              <NavLink to={`/page1.html/assets`}>Assets</NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
