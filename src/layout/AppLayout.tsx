import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";

import Spotify from "./Spotify";
import Footer from "./Footer";

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Navbar variant="dark" expand="lg" sticky="top" className="bg-dark">
      <Container>
      <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handleShow}>✳️</Nav.Link>
            <Nav.Link as={Link} to="/still">Still</Nav.Link>
            <Nav.Link as={Link} to="/motion">Motion</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Offcanvas className="bg-dark" show={show} onHide={handleClose}>
      <Spotify />
      </Offcanvas>

    {children}
    <Footer />
    </>
  );
}

export default AppLayout;