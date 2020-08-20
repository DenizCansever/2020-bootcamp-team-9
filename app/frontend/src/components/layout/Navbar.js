import React, { useState } from "react";
import axios from "axios";
import SignInLink from "./SignInLink";
import SignOutLink from "./SignOutLink";
import { Redirect, Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar as DCNavbar, Nav } from "react-bootstrap";

import "../../theme/_search.scss";
import Search from "../../containers/Search";

const Navbar = (props) => {
  const { auth } = props;
  const history = useHistory();
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const search = (e) => {
    if (e.key === "Enter") {
      axios
        .get(
          `https://eterationmovies.azurewebsites.net/api/movie/search?query=${state.s}`
        )
        .then((response) => {
          let results = response.data;

          setState((prevState) => {
            return { ...prevState, results: results};
          });
          history.push({
            pathname: '/results',
            state: {
              results
            }
          });
        });
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const links = auth.uid ? <SignInLink /> : <SignOutLink />;

  return (
    <DCNavbar sticky="top" bg="dark" expand="sm" variant="dark">
      <DCNavbar.Brand href="/">DistrictX</DCNavbar.Brand>
      <DCNavbar.Toggle aria-controls="basic-navbar-nav" />
      <DCNavbar.Collapse>
        <Search handleInput={handleInput} search={search} />
        {/* <Results results={state.results} /> */}
        <Nav className="mr-auto">
          <Nav.Link href="/movies">Movies</Nav.Link>
          <Nav.Link href="/watched">Watched</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Nav>{links}</Nav>
      </DCNavbar.Collapse>
    </DCNavbar>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
