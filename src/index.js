import "core-js/stable";
import React from "react";
import { createRoot } from "react-dom/client";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Root from "components/index/Root";
//import NoMatch from "components/index/NoMatch";

import "shared/index.css";
import "index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />} />
      <Route path="/index.html" element={<Root />} />
      <Route path="/squaring.html" element={<Root />} />
      <Route path="/cubing.html" element={<Root />} />
    </>
  )
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

if (module.hot) {
  module.hot.accept();
}
