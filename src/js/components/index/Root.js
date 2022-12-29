import React from "react";
import { useLoaderData, Outlet } from "react-router-dom";

import Content from "./Content";
import Layout from "../shared/Layout";

const Root = () => {
  const number = useLoaderData();

  return (
    <Layout current="math">
      <Content number={number} />
      <Outlet />
    </Layout>
  );
};

export default Root;
