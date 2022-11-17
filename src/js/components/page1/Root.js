import React from "react";
import PropTypes from "prop-types";

import VisibleArticleList from "containers/page1/VisibleArticleList";
import Assets from "./Assets";
import Footer from "./Footer";
import Nav from "./Nav";

const Root = ({ showFooter }) => (
  <div>
    <Nav />
    <Assets />
    <VisibleArticleList />
    {showFooter ? <Footer /> : ""}
  </div>
);

Root.propTypes = {
  showFooter: PropTypes.bool.isRequired,
};

export default Root;
