import React from "react";
import Navbar from "../components/layout/Navbar";
import SignIn from "../containers/SignIn";
import SignUp from "../containers/SignUp";
import MovieDetail from "../containers/MovieDetail";
import About from "../containers/About";
import Profile from "../containers/Profile";
import Watched from "../components/layout/Watched";
import AddMovie from "../components/layout/AddMovie";
import Results from "../components/layout/Results";

import Movies from "./Movies";
import Main from "../containers/Home";
import { GlobalProvider } from "../components/layout/GlobalState";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/movies" component={Movies} />
          <Route path="/movies/trending" component={Movies} />
          <Route path="/movies/popular" component={Movies} />
          <Route path="/movie/:id" component={MovieDetail} />
          <Route path="/watched" component={Watched} />
          <Route path="/about" component={About} />
          <Route path="/results" component={Results} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
