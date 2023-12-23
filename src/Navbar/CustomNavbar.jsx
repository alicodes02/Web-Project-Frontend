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
  const [isMobile, setIsMobile] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768); // Adjust this value according to your mobile breakpoint
    }

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Navbar {...args} style={{ backgroundColor: 'purple' }} className="custom-navbar" dark expand="md" fixed="">
        {isMobile ? (
          <>
            <NavbarToggler onClick={toggle} />
            <NavbarBrand tag={ReactLink} to="/" className="mr-auto">
            <FontAwesomeIcon icon={faUsers} />
              CollaboraHub
            </NavbarBrand>
          </>
        ) : (
          <>
            <NavbarBrand tag={ReactLink} to="/">
              <FontAwesomeIcon icon={faUsers} />
              CollaboraHub
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
          </>
        )}
        <Collapse isOpen={isOpen} navbar>
          <Nav className={isMobile ? 'ml-auto' : 'mr-auto'} navbar>
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
            {/* Other NavItems */}

            {!isMobile && ( // Render these NavItems only if it's not a mobile view
              <>
                 <Nav navbar>
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

              <NavItem>
                <NavLink tag={ReactLink} to="/taskmanagement" className="nav-link">
                  Task Management
                </NavLink>
              </NavItem>
              {/* Add other NavItems for desktop view */}
            </Nav>
                {/* Add other NavItems for desktop view */}
              </>
            )}
          </Nav>
          {isMobile && ( // Render these NavItems only for mobile view
            <Nav navbar>
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

                <NavItem>
                  <NavLink tag={ReactLink} to="/taskmanagement" className="nav-link">
                    Task Management
                  </NavLink>
                </NavItem>
              {/* Add other NavItems for mobile view */}
            </Nav>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
