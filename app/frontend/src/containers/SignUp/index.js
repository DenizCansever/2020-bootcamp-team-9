import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { signUp } from '../../redux/authActions'
import { connect } from 'react-redux'


function SignUp(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userAge, setUserAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp({ userEmail, userPassword, userFirstName, userLastName, userAge }, history));

    }

    return (
        <div>
            <Row>
                <Col className="box" >

                    <h4 className="mb-4">Sign Up</h4>
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

                        <Form.Group controlId="formUserFirstName">
                            <Form.Label>First Name:</Form.Label>
                            <Form.Control
                                type="text"
                                value={userFirstName}
                                placeholder="Enter First Name e.g Deniz"
                                onChange={e => setUserFirstName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formUserLastName">
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control
                                type="text"
                                value={userLastName}
                                placeholder="Enter Last Name e.g Cansever"
                                onChange={e => setUserLastName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formUserAge">
                            <Form.Label>Age:</Form.Label>
                            <Form.Control
                                type="number"
                                value={userAge}
                                placeholder="Enter Age e.g 26"
                                onChange={e => setUserAge(e.target.value)}
                            />
                        </Form.Group>

                        <Button type="submit" className="float-right">
                            SIGN UP
                 </Button>
                    </Form>

                </Col>
            </Row>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
