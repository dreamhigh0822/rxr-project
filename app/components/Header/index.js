import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { 
  Dropdown,
  Container, 
  Row, 
  Col, 
  Modal, 
  Button, 
  Image, 
  Navbar,
  Nav,
  NavDropdown
} from 'react-bootstrap';
import { Router, Route, Link, NavLink } from "react-router-dom";
import TopLogo from 'img/logo-vaHealth.svg';
import MenuLogo from 'img/appIcon-rxRefill.svg';
import './style.scss';

function Header() {
  const [showAbout, setShowAbout] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const handleCloseAbout = () => setShowAbout(false);
  const handleCloseHelp = () => setShowHelp(false);
  const handleShowAbout = () => setShowAbout(true);
  const handleShowHelp = () => setShowHelp(true);

  return (
    <Container>
      <Row>
        <Col>
          <Navbar collapseOnSelect expand="lg" className="nav-top">
            <Navbar.Brand as={Link} to="/">
              <img src={TopLogo} alt="" style={{width: '100px' }}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav-top" />
            <Navbar.Collapse id="responsive-navbar-nav-top">
              <Nav className="ml-auto">
                <NavDropdown title="Username" id="collasible-nav-dropdown-top">
                  <NavDropdown.Item>Return to Launchpad</NavDropdown.Item>
                  <NavDropdown.Item>Log out</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <Col>
          <Navbar collapseOnSelect expand="lg" className="nav-down">
            <img src={MenuLogo} alt="" style={{width: '40px', marginRight: '10px' }}/>
            <Navbar.Brand as={Link} to="/">
              Rx Refill
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav-down" />
            <Navbar.Collapse id="responsive-navbar-nav-down">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <NavDropdown title="Features" id="collasible-nav-dropdown-down">
                  <NavDropdown.Item as={Link} to="/refillable-va-medications">Refillable VA Medications</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/track-delivery">Track Delivery</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/prescription-history">Prescription History</NavDropdown.Item> 
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/links">Medications Information on My HealtheVet</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link onClick={handleShowAbout}>About</Nav.Link>
                <Nav.Link onClick={handleShowHelp}>Help</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>

      <Modal show={showAbout} onHide={handleCloseAbout}>
        <Modal.Header closeButton>
          <Modal.Title>About
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal About Body</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAbout}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showHelp} onHide={handleCloseHelp}>
        <Modal.Header closeButton>
          <Modal.Title>Help</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal About Body</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseHelp}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Header;
