import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { signIn } from '../../redux/authActions'

function SignIn(props) {
    const dispatch = useDispatch();
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // this.props.signIn(this.state)
        dispatch(signIn({ userEmail, userPassword }));
    }
    //if (auth.uid) return <Redirect to='/' /> //login olduktan sonra route yönlendirmesi nasil olacak?!
    

    return (
        <div className="container">
            <h4 className="mb-4">Sign In</h4>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUserEmail">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control
                        type="email"
                        value={userEmail}
                        placeholder="Enter email e.g abc@mail.com"
                        onChange={e => setUserEmail(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formUserPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        value={userPassword}
                        placeholder="Enter Password e.g 123456"
                        onChange={e => setUserPassword(e.target.value)}
                    />
                </Form.Group>

                <Button type="submit" className="float-right">
                    Submit
                 </Button>
            </Form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
