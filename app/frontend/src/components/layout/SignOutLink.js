import React from 'react'
import { NavLink } from 'react-router-dom'

const SignOutLink = () => {
    return (
        <ul className="right ">
            <li><NavLink to='/signup'>SIGN UP</NavLink></li>
            <li><NavLink to='/signin'>LOGIN</NavLink></li>
        </ul>
    )
}

export default SignOutLink