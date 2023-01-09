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
import Root from "containers/page1/Root";
import ArticleList from "containers/page1/ArticleList";
import Assets from "components/page1/Assets";
import ErrorPage from "components/shared/ErrorPage";

import { showAll, showRead, showUnread } from "actions/page1/articles";

import "shared/index.css";
import "page1.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="page1" element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route path="articles" element={<ArticleList />} />
        <Route path="assets" element={<Assets />} />
        <Route path="articles/all" element={<ArticleList />} loader={showAll} />
        <Route
          path="articles/read"
          element={<ArticleList />}
          loader={showRead}
        />
        <Route
          path="articles/unread"
          element={<ArticleList />}
          loader={showUnread}
        />
      </Route>
    </Route>
  )
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
