import React from "react";
import { NavLink } from "react-router-dom";

const Filter = () => (
  <p className="mb-2 px-1 py-1 bg-slate-200 rounded-md ring-1 ring-slate-300">
    Show:{" "}
    <NavLink to={"/page1/all"} className="link">
      All
    </NavLink>
    {", "}
    <NavLink to={"/page1/read"} className="link">
      Read
    </NavLink>
    {", "}
    <NavLink to={"/page1/unread"} className="link">
      Unread
    </NavLink>
  </p>
);

export default Filter;
