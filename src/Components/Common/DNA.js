import React from "react";
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import dnaGif from '../../assets/dna.gif';
function DNA() {
    return (
        <Nav.Link as={Link} to="/">
            <img width='40px' height='40px' src={dnaGif} alt="Selected GIF" />
        </Nav.Link>


    );

}

export default DNA;