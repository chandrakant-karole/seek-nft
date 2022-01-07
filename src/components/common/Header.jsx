import React from 'react'
import { Navbar, Container, Nav, Image } from 'react-bootstrap'
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <Navbar bg="light" expand="lg" className="p-0">
                <Container>
                    <Link to="/"><Image className='SiteLogo' src={Logo} fluid/></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className='justify-content-end' id="navbarScroll">
                        <Nav
                            className="my-2 my-lg-0"
                            style={{ maxHeight: '400px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#roadmap">RoadMap</Nav.Link>
                            <Nav.Link href="#team">Team</Nav.Link>
                            <Nav.Link href="#faq">Faq</Nav.Link>
                        </Nav>
                            <button className='connect_wallet'>Connect Wallet</button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
