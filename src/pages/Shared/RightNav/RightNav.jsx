import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from "../../../assets/bg.png";

const RightNav = () => {
    return (
        <div>
            <h2>Login With</h2>
            <Button variant='outline-primary'><FaGoogle /> Login With Google</Button>
            <Button variant='outline-primary'><FaGithub /> Login With GitHub</Button>

            <div>
                <h4>Find Us On</h4>
                <ListGroup variant="flush">
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>

                <QZone />

                <div className='position-relative'>
                    <img className='w-100' src={bg} alt="" />
                    <div className='position-absolute px-3 text-center' style={{ top: "30%" }}>
                        <h2>Create an Amazing Newspaper</h2>
                        <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                        <Button className='btn btn-danger'>Learn More</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightNav;