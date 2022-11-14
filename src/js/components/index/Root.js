import React from "react";
import { useLoaderData, Outlet } from "react-router-dom";

import Nav from "components/shared/Nav";

const Root = () => {
  const number = useLoaderData();

  return (
    <div>
      <Nav number={number} />
      <Outlet />
    </div>
  );
};

export default Root;
