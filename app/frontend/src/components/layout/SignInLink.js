import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../redux/authActions'

const SignInLink = (props) => {
    // props.signOut()
    return (
        <ul className="right ">
            <li><NavLink to='/profile'>PROFILE</NavLink></li>
            <li><a onClick={props.signOut}>LOG OUT</a></li>
            <li><NavLink to='/' className='btn-floating btn-large red waves-effect waves-light'>DC</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignInLink)