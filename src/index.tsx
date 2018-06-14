import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {BrowserRouter, StaticRouter, Router, Route, Link} from 'react-router-dom'

import { Home } from "./components/home"
import { List } from "./components/project/list"

ReactDOM.render(
  <BrowserRouter
    basename="/"
    forceRefresh={false}
    keyLength={12}
  >
    <div>
      <Link to="/">Home</Link>
      <Link to="/list">List</Link>
      <Route exact path="/list" component={List} />
      <Route exact path="/" component={Home} />
    </div>
  </BrowserRouter>,
  document.getElementById('app')
);
