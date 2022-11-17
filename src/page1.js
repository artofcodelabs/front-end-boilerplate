import "core-js/stable";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import "config";
import store from "stores/page1/store";
import App from "containers/page1/App";

import "shared/index.css";
import "page1.css";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="page1.html" element={<App />}></Route>)
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

if (module.hot) {
  module.hot.accept();
}
