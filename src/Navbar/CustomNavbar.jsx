import React, { useEffect, useState } from 'react';
import { NavLink as ReactLink } from 'react-router-dom';
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
        <Navbar {...args} color="dark" dark expand="md" fixed="">
          <NavbarBrand tag={ReactLink} to="/">
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
              </>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default CustomNavbar;