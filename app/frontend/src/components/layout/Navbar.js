import React from 'react'
import { Link } from 'react-router-dom'
import SignInLink from "./SignInLink"
import SignOutLink from "./SignOutLink"
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth } = props;
    //console.log(auth)
    const links = auth.uid ? <SignInLink /> : <SignOutLink />;

    return (
        <nav className="nav-wrapper black">
            <div className="container">
                <Link to='/' className="brand-logo center">District X</Link>
                <ul className="left ">
                    <li><Link to='/tv'>TV</Link></li>
                    <li><Link to='/movies'>MOVIES</Link></li>
                    <li><Link to='/calendar'>CALENDAR</Link></li>

                </ul>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)