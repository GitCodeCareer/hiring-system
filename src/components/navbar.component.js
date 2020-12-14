import React, { Component } from "react";
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

import logo from "../assets/logo.png";
import "../assets/styles/main.css";

class NavbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      isAuthenticated: false,
    });
  };

  render = () => {
    const { isOpen } = this.state;
    return (
      <>
        <Navbar light expand="md">
          <NavbarBrand href="/">
            <img src={logo} width="30" height="30" alt="" />
            <span className="ml-2 title">Hiring Job System</span>
          </NavbarBrand>
          <NavbarToggler onClick={() => this.toggle()} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/GitCodeCareer/hacktoberfest--hiring-system">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
            <NavLink tag={Link} to="/register">
              Register
            </NavLink>
            <NavLink tag={Link} to="/login">
              Login
            </NavLink>

            {this.state.isAuthenticated && (
              <NavLink tag={Link} to="/admin">
                Admin
              </NavLink>
            )}
          </Collapse>
        </Navbar>
      </>
    );
  };
}

export default NavbarComponent;
