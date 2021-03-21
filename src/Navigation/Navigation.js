import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoginContext } from "../App";
import "./navigation.css";
import logo from "../images/logo.png";

const Navigation = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const vehicleDefault = "Bike";

  return (
    <div>
      <Navbar variant="dark" fixed="top" className="px-5" bg="info" expand="lg">
        <Navbar.Brand href="/">
          <img className="logo" src={logo} alt="" />
          Departure City
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="px-3 text-light py-3 nav-link" to="/home">
              Home
            </Link>
            <Link
              className="px-3 text-light py-3 nav-link"
              to={`/vehicle/${vehicleDefault}`}
            >
              Destination
            </Link>
            <Link className="px-3 text-light py-3 nav-link" to="#home">
              Blog
            </Link>
            <Link className="px-3 text-light py-3 nav-link" to="#link">
              Contact
            </Link>

            {!loggedIn ? (
              <Link className="login-btn nav-link text-white" to="/login">
                Login
              </Link>
            ) : (
              <Link className="px-3 py-3 nav-link text-dark font-weight-bold">
                {loggedIn?.displayName || "User"}
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
