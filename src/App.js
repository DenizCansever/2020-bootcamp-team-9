import React from "react";

import Home from "./pages/Home";
import Tv from "./pages/Tv";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tv">
          <Tv />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
