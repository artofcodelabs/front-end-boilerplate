import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => (
  <div>
    <hr />

    <p>
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
  </div>
);

export default Footer;
