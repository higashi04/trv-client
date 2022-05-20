import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";




function Navibar() {
    return (
        <Navbar bg='light' expand='lg' fixed="top">
            <Container>
                <Navbar.Brand href="/">
                    Transporte Villarreal
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/buses">
                            Unidades
                        </Nav.Link>
                        <Nav.Link href="/drivers">
                            Choferes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navibar