import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "./pages/about";
import Home from "./pages/home";
import NotFound from "./pages/notfound";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Switch>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
