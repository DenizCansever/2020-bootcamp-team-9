import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import { signIn } from '../../redux/authActions'

function SignIn(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn({ userEmail, userPassword }));
        history.push("/")
    }



    return (
        <div>
            <Row>
                <Col className="box" >

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
                            SING IN
                 </Button>
                    </Form>


                </Col>
            </Row>
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
