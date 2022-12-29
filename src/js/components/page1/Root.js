import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Content from "./Content";
import Layout from "../shared/Layout";

const Root = ({ anyArticles }) => (
  <Layout current="page1">
    <Content anyArticles={anyArticles} />
    <Outlet />
    {anyArticles ? <Footer /> : ""}
  </Layout>
);

Root.propTypes = {
  anyArticles: PropTypes.bool.isRequired,
};

export default Root;
