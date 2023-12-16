import React, { useEffect, useState } from 'react';
import { NavLink as ReactLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';



function CustomNavbar(args) {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
      setIsOpen(false);
    }, []);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
       <Navbar {...args} style={{ backgroundColor: 'purple' }} className="custom-navbar" dark expand="md" fixed="">
          <NavbarBrand tag={ReactLink} to="/">
            <FontAwesomeIcon icon={faUsers} />
            CollaboraHub
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink tag={ReactLink} to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/about">
                  About
                </NavLink>
              </NavItem>
            </Nav>
            <Nav navbar>
              <>
                <NavItem>
                  <NavLink tag={ReactLink} to="/login" className="nav-link">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={ReactLink} to="/signup" className="nav-link">
                    Signup
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink tag={ReactLink} to="/userprofile" className="nav-link">
                    User Profile
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink tag={ReactLink} to="/projectmanagement" className="nav-link">
                    Project Management
                  </NavLink>
                </NavItem>

              </>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default CustomNavbar;