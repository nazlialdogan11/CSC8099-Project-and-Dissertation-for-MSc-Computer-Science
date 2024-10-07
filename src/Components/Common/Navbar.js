import React from "react";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarDropdown from './NavbarDropdown';
import DNA from './DNA';
import SearchBarComponent from "../SearchBarComponent";
import ScrollToTopButton from "../ScrollToTopButtonComponent";

function CustomNavbar() {
    return (
        <Navbar className="fixed-top" bg="dark" data-bs-theme="dark" style={{}}>
            <Container>
                <DNA />
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/introduction">Introduction</Nav.Link>
                    <NavbarDropdown />
                    <Nav.Link as={Link} to="/genechemicalinteractions">Gene-Chemical Interactions</Nav.Link>
                    <Nav.Link as={Link} to="/diseasechemicalassociations">Disease-Chemical Associations</Nav.Link>
                    <Nav.Link as={Link} to="/conclusion">Conclusion</Nav.Link>
                    <Nav.Link as={Link} to="/resources">Resources</Nav.Link>
                    <Nav.Item><SearchBarComponent /></Nav.Item>
                    <Nav.Item><ScrollToTopButton /></Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;