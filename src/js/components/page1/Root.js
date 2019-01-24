import React from "react";
import PropTypes from "prop-types";

import Nav from "components/shared/Nav";
import VisibleArticleList from "containers/page1/VisibleArticleList";
import Assets from "./Assets";
import Footer from "./Footer";

const Root = ({ showFooter }) => (
  <div>
    <Nav page="page1" />
    <Assets />
    <VisibleArticleList />
    {showFooter ? <Footer /> : ""}
  </div>
);

Root.propTypes = {
  showFooter: PropTypes.bool.isRequired
};

export default Root;
