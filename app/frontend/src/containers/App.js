import React from "react";
import Navbar from "../components/layout/Navbar";
import Home from "./Home";
import Tv from "./Tv";
import SignIn from "../components/authentication/SignIn";
import SignUp from "../components/authentication/SignUp";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/tv">
          <Tv />
        </Route>
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        {/* <Route path="/">
          <Home />
        </Route> */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
