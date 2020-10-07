import React from 'react';
import './Login.css'
import { Button, Container, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <Container>
            <div className="p-3 d-flex justify-content-center">
                <div className="reg-form p-3">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="outline-primary" type="submit"> Submit </Button>
                    </Form>
                    <br/>
                    <Button variant="outline-success">Google Sign In</Button>
                </div>
            </div>
        </Container>
    );
};

export default Login;