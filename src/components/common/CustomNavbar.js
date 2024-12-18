import React, { useEffect } from 'react';
import { Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo01 from '../../assets/img/logo.svg'; 
import text1 from '../../assets/img/text.svg'; 
import frame12 from '../../assets/img/Frame 12.svg'; 

function CustomNavbar({ showContainer12 = true }) {
  const navigate = useNavigate(); // Initialize navigate hook for redirection

  useEffect(() => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    const handleNavbarToggle = () => {
      if (navbarCollapse) {
        navbarCollapse.classList.toggle('show');
      }
    };

    if (navbarToggler) {
      navbarToggler.addEventListener('click', handleNavbarToggle);
    }

    // Cleanup event listener on unmount
    return () => {
      if (navbarToggler) {
        navbarToggler.removeEventListener('click', handleNavbarToggle);
      }
    };
  }, []);

  const handleLoginClick = () => {
    // Navigate to the Angular login page hosted on the subdomain
    window.location.href = 'https://software.rdsprecisionbilling.com';
};

  return (
    <>
      <div className="navbar-container">
        <Navbar bg="light" expand="lg" className="custom-navbar">
          <Navbar.Brand>
            <img
              src={logo01}
              alt="Logo"
              className="navbar-logo"
            />
            <Link to="/">
              <img
                src={text1}
                alt="Brand Text"
                className="navbar-text1"
                style={{ cursor: 'pointer' }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Solutions">
                <NavDropdown.Item as={Link} to="/revenue-cycle-management">Revenue Cycle Management</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/healthcare-digital-marketing">Healthcare Digital Marketing</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/healthcare-analytics">Healthcare Analytics</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/patient-experience-management">Patient Experience Management</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/practice-management">Practice Management</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Services">
                <NavDropdown.Item as={Link} to="/medical-billing">Medical Billing</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/medical-coding">Medical Coding</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/account-receivables">Account Receivables A/R</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/credentialing">Credentialing</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/denial-management">Denial Management</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <span className="navbar-text">
                <Link to="/pricing" className="nav-link1">Pricing</Link>
              </span>
              <span className="navbar-text">
                <Link to="/requestademo" className="nav-link request-demo">Request a demo</Link>
              </span>
            </Nav>
            <Button variant="primary" className="animated-btn ml-auto" onClick={handleLoginClick}>
  Login
</Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
      {showContainer12 && (
        <div className="container-12">
          <img src={frame12} alt="background" className="background-image" />
        </div>
      )}
    </>
  );
}

export default CustomNavbar;
