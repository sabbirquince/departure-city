import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoginContext } from "../App";

const Navigation = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  return (
    <div>
      <Navbar
        variant="dark"
        fixed="top"
        className="px-5"
        bg="secondary"
        expand="lg"
      >
        <Navbar.Brand href="/">Destination City</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="px-4 text-light py-3 nav-link" to="/home">
              Home
            </Link>
            <Link className="px-4 text-light py-3 nav-link" to="#link">
              Destination
            </Link>
            <Link className="px-4 text-light py-3 nav-link" to="#home">
              Blog
            </Link>
            <Link className="px-4 text-light py-3 nav-link" to="#link">
              Contact
            </Link>

            {!loggedIn ? (
              <Link className="px-4 text-light py-3 nav-link" to="/login">
                Login
              </Link>
            ) : (
              <Link className="px-4 py-3 nav-link text-info font-weight-bold">
                {loggedIn?.displayName}
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
