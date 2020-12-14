import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import { useAuth0 } from "@auth0/auth0-react";

import logo from "../assets/logo.png";
import "../assets/styles/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faGithub);

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const { isOpen } = this.state;
  return (
    <>
      <Navbar light expand="md">
        <NavbarBrand href="/">
          <img src={logo} width="30" height="30" alt="" />
          <span className="ml-2 title">Hiring Job System</span>
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse navbar>
          <Nav navbar className="navbar-nav w-100 d-flex justify-content-end">
            <NavItem>
              <NavLink href="https://github.com/GitCodeCareer/hacktoberfest--hiring-system">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/register">
                Register
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/login">
                Login
              </NavLink>
            </NavItem>
          </Nav>

          {/* {this.state.isAuthenticated && (
            <NavLink tag={Link} to="/admin">
              Admin
            </NavLink>
          )} */}
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
