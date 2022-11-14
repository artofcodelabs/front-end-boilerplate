import React from "react";
import PropTypes from "prop-types";
import { useSubmit, Form, NavLink } from "react-router-dom";

const Nav = ({ number }) => {
  const submit = useSubmit();

  return (
    <nav>
      <ul>
        <li>
          <NavLink to={`/?number=${number}`}>Index</NavLink>
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
              onChange={(event) => {
                const isFirstSearch = number == null;
                submit(event.currentTarget.form, {
                  replace: !isFirstSearch,
                });
              }}
            />
          </Form>
          <ul>
            <li>
              <NavLink to={`squaring?number=${number}`}>Squaring</NavLink>
            </li>
            <li>
              <NavLink to={`cubing?number=${number}`}>Cubing</NavLink>
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
