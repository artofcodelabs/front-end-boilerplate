import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Nav from "./Nav";

const Root = ({ anyArticles }) => (
  <div>
    <Nav anyArticles={anyArticles} />
    <Outlet />
    {anyArticles ? <Footer /> : ""}
  </div>
);

Root.propTypes = {
  anyArticles: PropTypes.bool.isRequired,
};

export default Root;
