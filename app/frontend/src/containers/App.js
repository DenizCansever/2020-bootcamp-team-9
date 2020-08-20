import React from "react";
import Navbar from "../components/layout/Navbar";
import SignIn from "../containers/SignIn";
import SignUp from "../containers/SignUp";
import MovieDetail from "../containers/MovieDetail";
import About from "../containers/About";
import Profile from "../containers/Profile";
import Results from "../components/layout/Results";
import Movies from "../containers/Movies";
import MoviesPopular from "../containers/MoviesPopular";
import MoviesTrending from "../containers/MoviesTrending";
import Watched from "../components/layout/Watched";
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
          <Route path="/movies" component={MoviesPopular} /> 
          <Route path="/movies/trending" component={MoviesTrending} />
          <Route path="/movies/popular" component={MoviesPopular} /> 
          <Route path="/movie/:id" component={MovieDetail} />
          <Route path="/about" component={About} />
          <Route path="/results" component={Results} />
          <Route path="/profile" component={Profile} />
          <Route path="/watched" component={Watched} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
