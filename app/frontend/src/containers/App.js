import React from "react";
import Navbar from "../components/layout/Navbar";
import SignIn from "../containers/SignIn";
import SignUp from "../containers/SignUp";
import MovieDetail from "../containers/MovieDetail";
import Movies from "./Movies";

import MovieContentPage from "../containers/MovieContent/MovieContent";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/movies" component={Movies} />
        <Route path="/movie/:id" component={MovieDetail} />
        <Route path="/moviesprofile" component={MovieContentPage} />
      </Switch>
    </Router>
  );
}

export default App;
