import React from "react";
import PropTypes from "prop-types";
import { NavLink as RouterNavLink } from "react-router-dom";

const spanClass =
  "inline-block mr-2 rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700 active:bg-indigo-800";

const NavLink = ({ to, active, children }) => {
  return (
    <RouterNavLink to={to}>
      {({ isActive }) => (
        <span
          className={
            isActive || active ? `${spanClass} bg-indigo-800` : spanClass
          }
        >
          {children}
        </span>
      )}
    </RouterNavLink>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default NavLink;
