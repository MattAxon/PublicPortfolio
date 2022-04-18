import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';


const MyNavbar = () => {

    return (

        <Navbar collapseOnSelect expand="lg" className='myNavbar' variant={"dark"}>
            <LinkContainer to={'/home'}>
                <Navbar.Brand className='brandName' onClick={document.getElementsByClassName('navlink').className = 'navlink'} >Axom.dev</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="collapse">
                <Nav className='"me-auto"' variant="pills">
                    <LinkContainer to={'/about'}>
                        <Nav.Link className='navlink'>about me</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={'/contact'}>
                        <Nav.Link className='navlink'>contact</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={'/projects'}>
                        <Nav.Link className='navlink'>projects</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default MyNavbar;
