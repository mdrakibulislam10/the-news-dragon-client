import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container'>
            <h2>Terms and condition</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti libero eveniet laudantium, ipsam corporis magnam ad facere enim praesentium id obcaecati sequi quam, facilis necessitatibus. Ducimus a praesentium nobis atque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt mollitia dignissimos cumque, maxime consectetur consequuntur molestias aliquid recusandae quos praesentium, voluptatibus quisquam aperiam repellendus atque expedita aliquam minima porro excepturi.
            </p>

            <Link to={"/register"}>Register</Link>
        </div>
    );
};

export default Terms;