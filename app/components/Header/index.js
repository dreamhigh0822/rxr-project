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
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home">VAHealth</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav-top" />
            <Navbar.Collapse id="responsive-navbar-nav-top">
              <Nav className="ml-auto">
                <NavDropdown title="" id="collasible-nav-dropdown-top">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <Col>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Rx Refill</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav-down" />
            <Navbar.Collapse id="responsive-navbar-nav-down">
              <Nav className="ml-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <NavDropdown title="Features" id="collasible-nav-dropdown-down">
                  <NavDropdown.Item href="#action/3.1">Refillable VA Medications</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Track Delivery</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Prescription History</NavDropdown.Item> 
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Medications Information on My HealtheVet</NavDropdown.Item>
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
