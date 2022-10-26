import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { main } from "helpers/common";
import Root from "components/index/Root";
import NoMatch from "components/index/NoMatch";

import "shared/index.css";
import "index.css";

main();

const router = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Root} />
      <Route path="/index(.html)?" component={Root} />
      <Route
        path="/(squaring|cubing)(.html)?"
        render={(props) => <Root {...props} />}
      />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(router, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
