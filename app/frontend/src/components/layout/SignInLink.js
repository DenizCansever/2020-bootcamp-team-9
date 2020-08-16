import React from 'react'
import { Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import { signOut } from '../../redux/authActions'

const SignInLink = (props) => {
    return (
        <Nav>
            <Nav.Link href='/profile'>PROFILE</Nav.Link>
            <button className='btn btn-outline-danger' onClick={props.signOut}>LOG OUT</button>
        </Nav>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignInLink)