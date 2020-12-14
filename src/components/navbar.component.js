import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Media,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
  const {
    isLoading,

    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();
  // const { isOpen } = this.state;

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
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

            {isAuthenticated || (
              <>
                <NavItem>
                  <NavLink>
                    <button
                      onClick={loginWithRedirect}
                      className="btn btn-signin p-0 text-primary"
                    >
                      Sign in
                    </button>
                  </NavLink>
                </NavItem>
              </>
            )}

            {isAuthenticated && (
              <>
                {/* <NavLink tag={Link} to="/admin">
                  Admin | profile image
                </NavLink> */}

                <Media className="d-flex align-items-center">
                  <Media left href="#">
                    <Media
                      object
                      width="25px"
                      src={user.picture}
                      alt={user.name}
                      className="rounded-circle mr-2"
                    />
                  </Media>
                  <Media body>
                    <Media heading className="h6 mb-0 mr-1">
                      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret className="btn-signin">
                          {user.name}
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Admin</DropdownItem>
                          <DropdownItem>
                            <Link to="/admin">Admin page</Link>
                          </DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem header>Jobs</DropdownItem>
                          <DropdownItem>
                            <Link to="/create-job">Create Jobs</Link>
                          </DropdownItem>

                          <DropdownItem divider />

                          <DropdownItem
                            onClick={() =>
                              logout({ returnTo: window.location.origin })
                            }
                          >
                            Logout
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Media>
                    {/* {user.email} */}
                  </Media>
                </Media>

                {/* <NavItem>
                  <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Log Out
                  </button>
                </NavItem> */}
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
