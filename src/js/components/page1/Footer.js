import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => (
  <div>
    <hr />

    <p>
      Show: <NavLink to={"/page1/all"}>All</NavLink>
      {", "}
      <NavLink to={"/page1/read"}>Read</NavLink>
      {", "}
      <NavLink to={"/page1/unread"}>Unread</NavLink>
    </p>
  </div>
);

export default Footer;
