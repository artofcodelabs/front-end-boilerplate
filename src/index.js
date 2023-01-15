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
import ErrorPage from "components/shared/ErrorPage";
import Root from "components/index/Root";
import Square from "components/index/Square";

import "shared/index.css";

const fetchNumber = ({ request }) => {
  const url = new URL(request.url);
  const number = url.searchParams.get("number");
  return Number(number) || 4;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      errorElement={<ErrorPage />}
      loader={fetchNumber}
    >
      <Route errorElement={<ErrorPage />}>
        <Route
          index
          element={
            <>
              <Square />
              <Cube />
            </>
          }
          loader={fetchNumber}
        />
        <Route path="squaring" element={<Square />} loader={fetchNumber} />
        <Route path="cubing" element={<Cube />} loader={fetchNumber} />
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
