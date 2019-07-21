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
import { Router, Route, Link, NavLink } from 'react-router-dom';

import modalInfo from './messages';
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

      <Modal show={showAbout} onHide={handleCloseAbout} size="lg">
        <Modal.Header>
          <Modal.Title>About
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="modal-content-row">
              <Col sm={5} className="modal-content-col">Application Name</Col>
              <Col sm={7}>{modalInfo.about["application-name"]}</Col>
            </Row>
            <Row className="modal-content-row">
              <Col sm={5} className="modal-content-col">Version Number</Col>
              <Col sm={7}>{modalInfo.about["version-number"]}</Col>
            </Row>
            <Row className="modal-content-row">
              <Col sm={5} className="modal-content-col">Developed By</Col>
              <Col sm={7}>{modalInfo.about["developed-by"]}</Col>
            </Row>
            <Row className="modal-content-row">
              <Col sm={5} className="modal-content-col">National Release Date</Col>
              <Col sm={7}>{modalInfo.about["national-release-date"]}</Col>
            </Row>
            <Row className="modal-content-row">
              <Col sm={5} className="modal-content-col">Application Description</Col>
              <Col sm={7}><p dangerouslySetInnerHTML={{__html: modalInfo.about["application-description"]}}></p></Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer className="justify-content-start">
          <Button variant="secondary" onClick={handleCloseAbout}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showHelp} onHide={handleCloseHelp} size="lg">
        <Modal.Header>
          <Modal.Title>Help</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
            <Row className="modal-content-row">
              <Col sm={5} className="modal-content-col">{modalInfo.help.browsers.title}</Col>
              <Col sm={7}>
                <p>This app can be used on the following supported browers:</p>
                {modalInfo.help["browsers-supported"].map((item, index) => <li key={index}>{item["browser-name"] + item["browser-version"]}</li>)}
              </Col>
            </Row>
            <Row className="modal-content-row">
              <Col sm={5} className="modal-content-col">{modalInfo.help["help-desk"].title}</Col>
              <Col sm={7}><p dangerouslySetInnerHTML={{__html: modalInfo.help["help-desk"].content}}></p></Col>
            </Row>
            <Row className="modal-content-row">
              <Col sm={5} className="modal-content-col">{modalInfo.help["emergency"].title}</Col>
              <Col sm={7}><p dangerouslySetInnerHTML={{__html: modalInfo.help["emergency"].content}}></p></Col>
            </Row>
            <Row className="modal-content-row">
              <Col sm={5} className="modal-content-col">{modalInfo.help["general-feedback"].title}</Col>
              <Col sm={7}><p dangerouslySetInnerHTML={{__html: modalInfo.help["general-feedback"].content}}></p></Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer className="justify-content-start">
          <Button variant="secondary" onClick={handleCloseHelp}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Header;
