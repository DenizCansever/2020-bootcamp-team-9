import React from 'react'
import SignInLink from "./SignInLink"
import SignOutLink from "./SignOutLink"
import { connect } from 'react-redux'
import { Navbar as DCNavbar, Nav } from 'react-bootstrap';

const Navbar = (props) => {
    const { auth } = props;

    const links = auth.uid ? <SignInLink /> : <SignOutLink />;

    return (
        <DCNavbar sticky="top" bg="dark" expand="sm" variant="dark">
            <DCNavbar.Brand href="/">DistrictX</DCNavbar.Brand>
            <DCNavbar.Toggle aria-controls="basic-navbar-nav" />
            <DCNavbar.Collapse >
                <Nav className="mr-auto">
                    <Nav.Link href='/movies'>MOVIES</Nav.Link>
                    <Nav.Link href='/tv'>TV</Nav.Link>
                    <Nav.Link href='/watched'>Watched</Nav.Link>
                    <Nav.Link href='/addmovie'>Add</Nav.Link>
                </Nav>
                <Nav >
                    {links}
                </Nav>
            </DCNavbar.Collapse>


        </DCNavbar>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)