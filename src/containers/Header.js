import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Mostrans Character</Link>
        </Navbar.Brand>
      </Container>
      <Nav className="mr-auto">
        <Nav.Link className="text-light">
          <Link to="/">Dashboard</Link>
        </Nav.Link>
        <Nav.Link className="text-light">
          <Link to="/location">Location</Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
