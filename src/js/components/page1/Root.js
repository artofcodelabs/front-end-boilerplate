import React from "react";
import PropTypes from "prop-types";

import VisibleArticleList from "containers/page1/VisibleArticleList";
import Assets from "./Assets";
import Footer from "./Footer";

const Root = ({ showFooter }) => (
  <div>
    <nav>
      <ul>
        <li>
          <a href="/">Math operations</a>
        </li>
        <li>
          <a href="#" className="active">
            Page 1
          </a>
        </li>
      </ul>
    </nav>
    <Assets />
    <VisibleArticleList />
    {showFooter ? <Footer /> : ""}
  </div>
);

Root.propTypes = {
  showFooter: PropTypes.bool.isRequired,
};

export default Root;
