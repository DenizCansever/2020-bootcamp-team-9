import React from "react";
import SignInLink from "./SignInLink";
import SignOutLink from "./SignOutLink";
import { connect } from "react-redux";
import {
  Navbar as DCNavbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import "../../theme/_search.scss";

const Navbar = (props) => {
  const { auth } = props;

  const links = auth.uid ? <SignInLink /> : <SignOutLink />;

  return (
    <DCNavbar sticky="top" bg="dark" expand="sm" variant="dark">
      <DCNavbar.Brand href="/">DistrictX</DCNavbar.Brand>
      <DCNavbar.Toggle aria-controls="basic-navbar-nav" />
      <DCNavbar.Collapse>
        <Form id="demo-2" class="expanding-search form-inline my-2 my-lg-0">
          <input
            type="search"
            class="form-control expanding-search mr-sm-2"
            placeholder="Search"
            aria-label="Search"
          />

          <button
            class="sr-only btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </Form>
        <Nav className="mr-auto">
          <Nav.Link href="/movies">Movies</Nav.Link>
          <Nav.Link href="/tv">Tv</Nav.Link>
          <Nav.Link href="/watched">Watched</Nav.Link>
          <Nav.Link href="/addmovie">Add</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/search">Search</Nav.Link>
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
