import React, { useEffect, useState } from 'react'
import { Container, Navbar, Nav, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'

export default function Header() {


function logoutLink(){
    setupdate(1)
}

    const [update, setupdate] = useState(0)

    const [login, setlogin] = useState({display: 'block'})

    
    useEffect(() => {

        const logoutShow = {
            display: 'block'
        }

        const siteUrl = window.location.pathname
            if(siteUrl === "/byu/"){
                setlogin({display: 'none'})
            } else {
                setlogin(logoutShow)
            }

    }, [update])


    return (
        <>
            <Navbar className='siteHeader' bg="light" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="https://www.seeknft.com/"><Image className="SiteLogo" src={Logo}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className='justify-content-end' id="navbarScroll">
                        <Nav
                            className="my-2 my-lg-0"
                            style={{ maxHeight: '400px' }}
                            navbarScroll
                        >
                            <Nav.Link href="https://www.seeknft.com/studio">Studio</Nav.Link>
                            <Nav.Link href="https://www.seeknft.com/marketplace">Marketplace</Nav.Link>
                            <Nav.Link href="https://www.seeknft.com/community">Community</Nav.Link>
                            <Nav.Link href="https://www.seeknft.com/contact">Contact</Nav.Link>
                            <Link className='logoutBtn' style={login} to="/" onClick={logoutLink}>Logout</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
