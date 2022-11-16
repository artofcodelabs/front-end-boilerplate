import "core-js/stable";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import "config";
import store from "stores/page1/store";
import App from "containers/page1/App";

import "shared/index.css";
import "page1.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

if (module.hot) {
  module.hot.accept();
}
