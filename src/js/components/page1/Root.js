import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Nav from "./Nav";

const Root = ({ showFooter }) => (
  <div>
    <Nav />
    <Outlet />
    {showFooter ? <Footer /> : ""}
  </div>
);

Root.propTypes = {
  showFooter: PropTypes.bool.isRequired,
};

export default Root;
