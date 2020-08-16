import React from 'react'
import { Nav } from 'react-bootstrap'

const SignOutLink = () => {
    return (
        <Nav>
            <Nav.Link href='/signup'>SIGN UP</Nav.Link>
            <Nav.Link href='/signin'> SIGN IN</Nav.Link>
        </Nav>
    )
}

export default SignOutLink