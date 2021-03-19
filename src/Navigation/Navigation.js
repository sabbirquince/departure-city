import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar fixed="top" className="px-5" bg="light" expand="lg">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="px-4 py-3" to="/home">
              Home
            </Link>
            <Link className="px-4 py-3" to="#link">
              Destination
            </Link>
            <Link className="px-4 py-3" to="#home">
              Blog
            </Link>
            <Link className="px-4 py-3" to="#link">
              Contact
            </Link>
            <Link className="px-4 py-3" to="/login">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
