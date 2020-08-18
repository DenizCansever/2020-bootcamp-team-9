import React from 'react'
import { Nav } from 'react-bootstrap'

const SignOutLink = () => {
    return (
        <>
            <Nav.Link href='/signup'>SIGN UP</Nav.Link>
            <Nav.Link href='/signin'> SIGN IN</Nav.Link>
        </>
    )
}

export default SignOutLink