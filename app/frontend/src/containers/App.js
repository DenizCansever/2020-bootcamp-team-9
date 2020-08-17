import React from "react";
import Navbar from "../components/layout/Navbar";
import SignIn from "../containers/SignIn";
import SignUp from "../containers/SignUp";
import MovieDetail from "../containers/MovieDetail";
import Watched from "../components/layout/Watched";
import AddMovie from "../components/layout/AddMovie";
import Movies from "./Movies";

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
        <Route path="/watched" component={Watched} />
        <Route path="/addmovie" component={AddMovie} />
      </Switch>
    </Router>
  );
}

export default App;
