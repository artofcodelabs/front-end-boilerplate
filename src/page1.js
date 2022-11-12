import "core-js/stable";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import "config";
import store from "stores/page1/store";
import App from "containers/page1/App";

import "shared/index.css";
import "page1.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
