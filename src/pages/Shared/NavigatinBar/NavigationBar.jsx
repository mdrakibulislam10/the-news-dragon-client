import React from 'react';
import { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    // log out
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("user logged out");
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">

                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to={"/category/0"}>Home</Link>
                            <Nav.Link href="#features">About</Nav.Link>
                            <Nav.Link href="#features">Career</Nav.Link>
                        </Nav>
                        <Nav>

                            {
                                user &&
                                <FaUserCircle style={{ fontSize: "2rem" }} />
                            }

                            {
                                user
                                    ? <button className='btn btn-secondary' onClick={handleLogOut}>Log out</button>
                                    : <Link to={"/login"}><button className='btn btn-secondary'>Login</button></Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;