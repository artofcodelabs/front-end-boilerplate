import React from "react";
import PropTypes from "prop-types";
import { Form, NavLink } from "react-router-dom";

const Nav = ({ number }) => {
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
              defaultValue={number}
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

Nav.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Nav;
