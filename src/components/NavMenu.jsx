import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    return(
        <>
            <Navbar bg="dark" variant="dark" className='mb-4'>
                <Container>
                <Link className="navbar-brand" to="/">TP REACT</Link>
                <Nav className="ms-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/about">About</Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavMenu