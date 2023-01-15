import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

import Content from "./Content";
import Layout from "../shared/Layout";

const Root = ({ anyArticles }) => (
  <Layout current="page1">
    <Content anyArticles={anyArticles} />
    <Outlet />
  </Layout>
);

Root.propTypes = {
  anyArticles: PropTypes.bool.isRequired,
};

export default Root;
