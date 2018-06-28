import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {BrowserRouter, StaticRouter, Router, Route, Link} from 'react-router-dom'

import { Home } from "./components/home"
import { List } from "./components/project/list"
import { Footer } from "./components/public/footer"

ReactDOM.render(
  <BrowserRouter
    basename="/"
    forceRefresh={false}
    keyLength={12}
  >
    <div>
      <div className="m-auto">
        <Link to="/">Home</Link>
        <Link to="/list">List</Link>
      </div>
      <Route exact path="/list" component={List} />
      <Route exact path="/" component={Home} />
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById('app')
);
