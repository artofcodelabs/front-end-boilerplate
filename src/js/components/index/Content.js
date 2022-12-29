import React from "react";
import PropTypes from "prop-types";
import { useLocation, useSubmit, Form, NavLink } from "react-router-dom";

const Content = ({ number }) => {
  const submit = useSubmit();
  const location = useLocation();

  return (
    <>
      <Form id="number-form" style={{ display: "inline", marginLeft: "10px" }}>
        <div>
          <label
            htmlFor="number"
            className="block text-sm font-medium text-gray-700"
          >
            Number
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
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
                  action: `${location.pathname}?${location.search}`,
                  replace: !isFirstSearch,
                });
              }}
              className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </Form>
      <NavLink to={`/?number=${number}`}>All operations</NavLink>
      <NavLink to={`squaring?number=${number}`}>Squaring</NavLink>
      <NavLink to={`cubing?number=${number}`}>Cubing</NavLink>
    </>
  );
};

Content.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Content;
