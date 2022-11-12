import "core-js/stable";
import React from "react";
import { createRoot } from "react-dom/client";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Cube from "components/index/Cube";
import ErrorPage from "components/index/ErrorPage";
import Root from "components/index/Root";
import Square from "components/index/Square";

import "shared/index.css";
import "index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route
          index
          element={
            <>
              <Square />
              <Cube />
            </>
          }
        />
        <Route path="squaring" element={<Square />} />
        <Route path="cubing" element={<Cube />} />
      </Route>
    </Route>
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
