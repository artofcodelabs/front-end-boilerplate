import React from "react";
import { Form, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Index</NavLink>
          <Form
            id="number-form"
            style={{ display: "inline", marginLeft: "10px" }}
          >
            <input
              id="number"
              aria-label="Specify number for calculations"
              placeholder="Number"
              type="number"
              name="number"
            />
          </Form>
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
