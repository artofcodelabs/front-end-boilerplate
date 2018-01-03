import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {main, isProd} from 'helpers/common.js'
import Root from 'components/index/Root';
import NoMatch from 'components/index/NoMatch';

import 'shared/index.css';
import 'index.styl';

main();

const router = (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Root} />
      <Route path='/index(.html)?' component={Root} />
      <Route
        path='/(squaring|cubing)(.html)?'
        render={props => <Root {...props} />}
      />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
);

const RootComponent = isProd()
  ? <Root match={{params: []}} />
  : router;

ReactDOM.render(
  RootComponent,
  document.getElementById('root')
);