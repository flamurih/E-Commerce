import React from 'react';
import { Nav, Navbar,  Container, Collapse, NavDropdown } from 'react-bootstrap';
import './NavBar.css';


export default function NavBar() {
  return (
    <>
        <Navbar className='navbar'>
            <Container>
                <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" style={{ marginLeft: "20px" }}>Home</Nav.Link>
                        <Nav.Link href="#link" style={{ marginLeft: "20px" }}>About</Nav.Link>
                        <Nav.Link href="#link" style={{ marginLeft: "20px" }}>Contact</Nav.Link>
                        <Nav.Link href="#link" style={{ marginLeft: "20px" }}>Statistics</Nav.Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#Login" style={{ marginLeft: "20px" }}>Log In</Nav.Link>
                        <Nav.Link href="#Register" style={{ marginLeft: "20px" }}>Register</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    </>
  )
}
