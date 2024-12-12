import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaEnvelope, FaBell } from 'react-icons/fa6';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineMoon, HiSun } from 'react-icons/hi';
import aims from './aims.png'
import aimsLight from './aimsLight.png';
import { useTheme } from '../ThemeContext'; // Import ThemeContext
import './Header.css';

export const Header = () => {
  const { theme, toggleTheme } = useTheme(); // Access theme and toggleTheme from context

  return (
    <header>
      {/* Navbar Start */}
      <Navbar expand="lg" bg={theme} className={`px-3 shadow-bottom ${theme}`}>
        <Container fluid>
          {/* Company Logo */}
          <Navbar.Brand href="#">
            <img
              src={theme === 'light' ? aims : aimsLight} // Conditional logo rendering
              alt="Company Logo"
              className="navbar-logo"
            />          </Navbar.Brand>

          {/* Toggle button for mobile view */}
          <Navbar.Toggle aria-controls="navbarContent" />

          {/* Navbar Content */}
          <Navbar.Collapse id="navbarContent">
            {/* Right Side: Notifications, User Account, and Theme Toggle */}
            <Nav className="ms-auto align-items-center">
              {/* Mail Notification */}
              <Nav.Item>
                <Nav.Link href="#" className="notification-icon">
                  <FaEnvelope style={{ fontSize: '1.5rem' }} />
                  <span className="badge bg-danger rounded-pill">5</span>
                  <span className="visually-hidden">unread messages</span>
                </Nav.Link>
              </Nav.Item>

              {/* General Notification */}
              <Nav.Item>
                <Nav.Link href="#" className="notification-icon">
                  <FaBell style={{ fontSize: '1.5rem' }} />
                  <span className="badge bg-danger rounded-pill">3</span>
                  <span className="visually-hidden">unread notifications</span>
                </Nav.Link>
              </Nav.Item>

              {/* User Account Section */}
              <Nav.Item>
                <Nav.Link href="#" className="user-account">
                  <CgProfile style={{ fontSize: '1.75rem', marginRight: '10px' }} />
                  <span>John Doe</span>
                </Nav.Link>
              </Nav.Item>

              {/* Theme Toggle Button */}
              <Nav.Item>
                <Nav.Link className="theme-toggle-button">
                  <button
                    onClick={toggleTheme}
                    className={`btn btn-outline-${theme === 'light' ? 'dark' : 'light'} ms-3`}
                    style={{ fontSize: '0.9rem' }}
                  >
                    {theme === 'light' ? <HiOutlineMoon /> : <HiSun />}
                    {theme === 'light' ? ' Dark Mode' : ' Light Mode'}
                  </button>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Navbar End */}
    </header>
  );
};
