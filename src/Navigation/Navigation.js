import React, { useContext, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoginContext } from "../App";
import "./navigation.css";
import logo from "../images/logo.png";

const Navigation = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const vehicleDefault = "Bike";

  const [activeClass, setActiveClass] = useState({
    key: null,
    index: [0, 1, 2, 3, 4],
  });

  const setActive = (index) => {
    const newAct = { ...activeClass };
    newAct.key = index;
    setActiveClass(newAct);
  };

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
            <Link
              className={
                activeClass.key === 0
                  ? "px-3 active py-3 nav-link"
                  : "px-3 text-light py-3 nav-link"
              }
              onClick={() => setActive(activeClass.index[0])}
              to="/home"
            >
              Home
            </Link>
            <Link
              className={
                activeClass.key === 1
                  ? "px-3 active py-3 nav-link"
                  : "px-3 text-light py-3 nav-link"
              }
              onClick={() => setActive(activeClass.index[1])}
              to={`/vehicle/${vehicleDefault}`}
            >
              Destination
            </Link>
            <Link
              className={
                activeClass.key === 2
                  ? "px-3 active py-3 nav-link"
                  : "px-3 text-light py-3 nav-link"
              }
              onClick={() => setActive(activeClass.index[2])}
              to="#home"
            >
              Blog
            </Link>
            <Link
              className={
                activeClass.key === 3
                  ? "px-3 active py-3 nav-link"
                  : "px-3 text-light py-3 nav-link"
              }
              onClick={() => setActive(activeClass.index[3])}
              to="#link"
            >
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
