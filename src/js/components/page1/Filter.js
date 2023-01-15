import React from "react";
import { NavLink } from "react-router-dom";

const Filter = () => (
  <p className="mb-3 px-1 py-1 bg-slate-200 rounded-md ring-1 ring-slate-300">
    Show:{" "}
    <NavLink to={"/page1/articles/all"} className="link">
      All
    </NavLink>
    {", "}
    <NavLink to={"/page1/articles/read"} className="link">
      Read
    </NavLink>
    {", "}
    <NavLink to={"/page1/articles/unread"} className="link">
      Unread
    </NavLink>
  </p>
);

export default Filter;
