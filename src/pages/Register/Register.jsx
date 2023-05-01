import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(err => console.log(err.message))
    };

    // term and condition and checkbox;
    const handleAccepted = event => {
        // console.log(event.target.checked);
        setAccepted(event.target.checked); // return true or false;
    };

    return (
        <Container className='mx-auto w-25'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your name</Form.Label>

                    <Form.Control type="text" name='name' required placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Photo URL</Form.Label>

                    <Form.Control type="text" name='photo' required placeholder="Enter photo url" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>

                    <Form.Control type="email" name='email' required placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>

                    <Form.Control type="password" name='password' required placeholder="Password" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        label={<>Accept <Link to={"/terms"}>Terms and Condition</Link></>} />
                </Form.Group>
                <input type="checkbox" name="" id="" />
                <Button
                    disabled={!accepted} // accepted state er value jokhon false hobe tokhon btn disable thabke arki;
                    variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className='text-secondary'>
                    Already have an account? <Link to={"/login"}>Login</Link>
                </Form.Text>

                <Form.Text className='text-success'>

                </Form.Text>

                <Form.Text className='text-danger'>

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;