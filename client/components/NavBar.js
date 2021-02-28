import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Link,
  Route,
  Switch,
} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-md bg-success">
      <div className="container-fluid">
        <span className="navbar-brand">
          <b>LightRunner</b>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <NavLink
              className="nav-link nav-item"
              activeClassName="active"
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link nav-item"
              activeClassName="active"
              to="/status"
            >
              Status
            </NavLink>

            <div className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tools
              </div>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link
                  className="dropdown-item"
                  activeClassName="dropdown-item"
                  to="/control"
                >
                  Control
                </Link>
                <Link
                  className="dropdown-item"
                  activeClassName="dropdown-item"
                  to="/configure"
                >
                  Configure
                </Link>
                <Link
                  className="dropdown-item"
                  activeClassName="dropdown-item"
                  to="/create"
                >
                  Create
                </Link>
                <Link
                  className="dropdown-item"
                  activeClassName="dropdown-item"
                  to="/collaborate"
                >
                  Collaborate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
