import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, Button, Container, Offcanvas} from 'react-bootstrap'; 
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaReact } from 'react-icons/fa'
import {Link} from 'wouter'

const Navegation = () => {
  return (
    <>
        {['lg'].map((expand) => (
            <Navbar key={expand} bg="ligth" expand={expand} className="mb-3" fixed='top'>
                <Container fluid>
                    
                    {/* NAVBAR */}
                    <Navbar.Brand href="#" className='nav-title'>React App <FaReact className='icon-nav'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}><GiHamburgerMenu className='nav-icon'/></Navbar.Toggle>

                    {/* OFFCANVAS */}
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="start"
                        >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='nav-title'>
                                React App <FaReact className='icon-nav'/>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Link to='/home'><Nav.Link href="/home" className='nav-link'>Home</Nav.Link></Link>
                                <Link to='/contact'><Nav.Link href="#action2" className='nav-link'>Contact</Nav.Link></Link>
                                <Link to='/about'><Nav.Link href="#action3" className='nav-link'>About</Nav.Link></Link>
                                <Button href='/login' className='btn-link btn-login'>Iniciar Sesion</Button>
                                <Button href='/register' className='btn-link btn-register'>Registrarse</Button>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        ))}
    </>
    
  )
}

export default Navegation;