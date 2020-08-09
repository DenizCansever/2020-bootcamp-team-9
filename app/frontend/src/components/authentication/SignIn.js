import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

function SignIn(props) {
    const dispatch = useDispatch();
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    
    const handleSubmit = (e) => {console.log(e)}

    return (
        <div className="container">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="userEmail">
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

                <Form.Group controlId="userPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control 
                        type="password" 
                        value={userPassword}
                        placeholder="Enter Password e.g 123456" 
                        onChange={e => setUserPassword(e.target.value)}
                    />
                </Form.Group>
  
                <Button  type="submit" className="float-right">
                    Submit
                 </Button>
            </Form>             
        </div>
    );
}


export default SignIn
