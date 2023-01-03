import React from "react";
import PropTypes from "prop-types";
import { useLocation, useSubmit, Form } from "react-router-dom";
import NavLink from "../shared/NavLink";

const Content = ({ number }) => {
  const submit = useSubmit();
  const location = useLocation();

  return (
    <div className="mb-2">
      <Form id="number-form">
        <div className="mb-2">
          <label
            htmlFor="number"
            className="block text-sm font-medium text-gray-700"
          >
            Number
          </label>
          <div className="relative mt-1 rounded-md shadow-sm w-full sm:w-1/2">
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
    </div>
  );
};

Content.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Content;
