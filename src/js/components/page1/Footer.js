import React from "react";
import FilterLink from "containers/page1/FilterLink";

const Footer = () => (
  <div>
    <hr />

    <p>
      Show: <FilterLink filter="SHOW_ALL">All</FilterLink>
      {", "}
      <FilterLink filter="SHOW_READ">Read</FilterLink>
      {", "}
      <FilterLink filter="SHOW_UNREAD">Unread</FilterLink>
    </p>
  </div>
);

export default Footer;
