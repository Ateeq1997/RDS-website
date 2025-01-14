import React, { useEffect, useState } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo01 from '../../assets/img/logo.svg';
import text1 from '../../assets/img/text.svg';
import frame12 from '../../assets/img/Frame 12.svg';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <><div
      className="btn-group1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="btn1 dropdown-toggle"
        aria-expanded={isOpen}
      >
        Solutions
      </button>
      {isOpen && (
        <ul
          className="dropdown-menu dropdown-menu-solutions centered-dropdown"
          aria-labelledby="solutionsDropdown"
        >
          <li>
            <Link
              className="dropdown-item"
              to="/revenue-cycle-management" 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsOpen(false);
              }}
            >
              Revenue Cycle Management
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="/healthcare-digital-marketing"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsOpen(false);
              }}
            >
              Healthcare Digital Marketing
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="/healthcare-analytics"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsOpen(false);
              }}
            >
              Healthcare Analytics
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="/patient-experience-management"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsOpen(false);
              }}
            >
              Patient Experience Management
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="/practice-management"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsOpen(false);
              }}
            >
              Practice Management
            </Link>
          </li>
        </ul>
      )}


    </div>
    <div
      className="btn-group2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
        <button
          className="btn1 dropdown-toggle"
          aria-expanded={isOpen}
        >
          Services
        </button>
        {isOpen && (
          <ul
            className="dropdown-menu dropdown-menu-solutions centered-dropdown"
            aria-labelledby="solutionsDropdown"
          >
            <li>
              <Link
                className="dropdown-item"
                to="/medical-billing"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsOpen(false);
                }}
              >
                Medical Billing
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to="/medical-coding"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsOpen(false);
                }}
              >
                Medical Coding
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to="/account-receivables"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsOpen(false);
                }}
              >
                Account Receivables A/R
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to="/credentialing"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsOpen(false);
                }}
              >
               Credentialing
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to="/denial-management"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsOpen(false);
                }}
              >
                Denial Management
              </Link>
            </li>
          </ul>
        )}


      </div></>
  );
};

function CustomNavbar({ showContainer12 = true }) {
  const navigate = useNavigate();

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

    return () => {
      if (navbarToggler) {
        navbarToggler.removeEventListener('click', handleNavbarToggle);
      }
    };
  }, []);

  const handleLoginClick = () => {
    window.location.href = 'https://software.rdsprecisionbilling.com';
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="custom-navbar">
        <Navbar.Brand>
          <img src={logo01} alt="Logo" className="navbar-logo" />
          <Link to="/"onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={text1} alt="Brand Text" className="navbar-text1" style={{ cursor: 'pointer' }} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <DropdownMenu />
            <Nav>
              <span className="navbar-text">
                <Link to="/pricing" className="nav-link1" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  Pricing
                </Link>
              </span>
              <span className="navbar-text">
                <Link
                  to="/requestademo"
                  className="nav-link request-demo"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Request a demo
                </Link>
              </span>
            </Nav>
            <Button variant="primary" className="animated-btn ml-auto" onClick={handleLoginClick}>
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {showContainer12 && (
        <div className="container-12">
          <img src={frame12} alt="background" className="background-image" />
        </div>
      )}
    </>
  );
}

export default CustomNavbar;
