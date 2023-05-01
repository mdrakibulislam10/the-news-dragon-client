import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    console.log(location);

    const from = location?.state?.from?.pathname || "/category/0";

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);

                form.reset();

                navigate(from, { replace: true });
            })
            .catch(err => console.log(err.message))
    };

    // Update a user's profile - get valid photo url from online and paste photo url input box and follow documentation;
    // const practice;

    return (
        <div>
            <Container className='mx-auto w-25'>
                <h3>Please Login</h3>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>

                        <Form.Control type="email" name='email' required placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>

                        <Form.Control type="password" name='password' required placeholder="Password" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <br />
                    <Form.Text className='text-secondary'>
                        Don't have an account? <Link to={"/register"}>Register</Link>
                    </Form.Text>

                    <Form.Text className='text-success'>

                    </Form.Text>

                    <Form.Text className='text-danger'>

                    </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Login;