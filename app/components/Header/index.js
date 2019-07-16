import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Dropdown, Container, Row, Col, Modal, Button } from 'react-bootstrap';
import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
import $ from 'jquery';

function Header() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const handleClose = () => setShow(false);
  const handleCloseHelp = () => setShow1(false);
  const handleShow = () => setShow(true);
  const handleShowHelp = () => setShow1(true);

  function onFeauturesMenuDropdown() {
    $('#nav-dropdown').attr('aria-expanded', true);
  }

  return (
    <div>
      <div className="va-title-area">
        <img src="../../../img/logo-vaHealth.svg" id="logo-va" alt="VA Health" title="VA Health"/>
          <div className="dropdown" id="header-login">
            <a href="empty-not-allowed" className="dropdown-toggle" data-toggle="dropdown" id="userMenuLink" aria-haspopup="true" aria-expanded="false" role="button" aria-controls="userMenu">
                <img src="img/icon-userMenuDown.svg" id="login-off" alt="" aria-hidden="true"/><img src="img/icon-userMenuUp.svg" id="login-on" alt="" aria-hidden="true"/>
            </a>
              <ul className="dropdown-menu dropdown-menu-right" role="navigation" aria-label="User Submenu" id="userMenu">
                  <li><a href="launchpad">Return to Launchpad</a></li>
                  <li><a href="javascript:void(0);" id="logout">Log Out</a></li>
              </ul>
        </div>
        <a className="sr-only sr-only-focusable" id="skipNav" href="#content-title">Skip to main content</a>
      </div>

      <div className="app-title-area">
        <a href="#" className="titleAreaLogo"><img src="img/appIcon-rxRefill.svg" alt="Home logo" /><h1>Rx Refill</h1></a>
        <nav className="navbar" id="menu-list">
          <a href="#" id="home">Home</a>
          <a id="nav-dropdown" onClick={onFeauturesMenuDropdown} className="dropdown-toggle" data-toggle="dropdown" role="button"
            aria-controls="tabletFeaturesMenu" aria-haspopup="true" aria-expanded="false">
            Features
            <img src="img/icon-menuDown.svg" id="menu-off" alt="" aria-hidden="true" />
            <img src="img/icon-menuDownBlack.svg" id="menu-off2" alt="" aria-hidden="true" />
            <img src="img/icon-menuUp.svg" id="menu-on" alt="" aria-hidden="true" />
          </a>
          <ul className="dropdown-menu dropdown-menu-right" role="navigation" aria-label="Features Submenu" id="tabletFeaturesMenu">
            <li><a href="#refillable-va-medications">Refillable VA Prescriptions</a></li>
            <li><a href="#track-delivery">Track Delivery</a></li>
            <li><a href="#prescription-history" >Prescription History</a></li>
            <li><a href="#links">Medication Information on My Health<span className="mhevet">e</span>Vet</a></li>
          </ul>
          <a id="about" onClick={handleShow} role="button" data-toggle="modal" data-target="#about-modal" aria-controls="about-modal">About</a>
          <a id="help" onClick={handleShowHelp} role="button" data-toggle="modal" data-target="#help-modal" aria-controls="help-modal">Help</a>
        </nav>
        <nav className="navbar" id="hamburger-list">
          <a href="#" id="phoneFeaturesMenuLink" className="dropdown-toggle" data-toggle="dropdown" role="button"
            aria-controls="phoneFeaturesMenu" aria-haspopup="true" aria-expanded="false" aria-label="Menu">
            <img src="img/btn-hamburger-off.svg" id="hamburger-off" alt="" aria-hidden="true"/>
            <img src="img/btn-hamburger-on.svg" id="hamburger-on" alt="" aria-hidden="true"/>
          </a>
          <ul className="dropdown-menu dropdown-menu-right" role="navigation" id="phoneFeaturesMenu">
            <li><a href="#home">Home <img src="img/icon-arrowForward.svg" alt="" title="" aria-hidden="true"/></a></li>
            <li><a href="#refillable-va-medications">Refillable VA Prescriptions <img src="img/icon-arrowForward.svg" alt="" title="" aria-hidden="true"/></a></li>
            <li><a href="#track-delivery">Track Delivery <img src="img/icon-arrowForward.svg" alt="" title="" aria-hidden="true"/></a></li>
            <li><a href="#prescription-history">Prescription History <img src="img/icon-arrowForward.svg" alt="" title="" aria-hidden="true"/></a></li>
            <li><a href="#links" id="med-info-link">Medication Information on My <br/>Health<span className="mhevet">e</span>Vet <img src="img/icon-arrowForward.svg" alt="" title="" aria-hidden="true"/></a></li>
            <li><a href="empty-not-allowed" role="button" data-toggle="modal" data-target="#about-modal" aria-controls="about-modal">About <img src="img/icon-arrowForward.svg" alt="" title="" aria-hidden="true"/></a></li>
            <li id="last"><a href="empty-not-allowed" role="button" data-toggle="modal" data-target="#help-modal" aria-controls="help-modal">Help <img src="img/icon-arrowForward.svg" alt="" title="" aria-hidden="true"/></a></li>
          </ul>
        </nav>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
          <h4 class="modal-title about-title" id="about-label" tabIndex="0">About</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="row about-row">
              <div class="col-sm-4"><label htmlFor="about-app-name">Application Name</label></div>
              <div class="col-sm-8" id="about-app-name">app.about.application-name</div>
          </div>
          <div class="row about-row">
              <div class="col-sm-4"><label htmlFor="about-version">Version Number</label></div>
              <div class="col-sm-8" id="about-version">app.about.version-number</div>
          </div>
          <div class="row about-row">
              <div class="col-sm-4"><label htmlFor="about-developed">Developed By</label></div>
              <div class="col-sm-8" id="about-developed">app.about.developed-by</div>
          </div>
          <div class="row about-row">
              <div class="col-sm-4"><label htmlFor="about-date">National Release Date</label></div>
              <div class="col-sm-8" id="about-date">app.about.national-release-date</div>
          </div>
          <div class="row about-row" id="about-last">
              <div class="col-sm-4"><label htmlFor="about-desc">Application Description</label></div>
              <div class="col-sm-8" id="about-desc">app.about.application-description</div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
      
      <Modal show={show1} onHide={handleCloseHelp}>
        <Modal.Header>
          <Modal.Title>
          <h4 class="modal-title about-title" id="about-label" tabIndex="0">Help</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row help-row">
              <div className="col-sm-4"><label for="help-browsers">app.help.browsers.title</label></div>
              <div className="col-sm-8" id="help-browsers">
                  This app can be used on the following supported browsers:
                  <ul>
                    
                      <li>browser-name browser-version</li>
      
                  </ul>
              </div>
          </div>
          <div className="row help-row">
              <div className="col-sm-4"><label htmlFor="help-desk">app.help.help-desk.title</label></div>
              <div className="col-sm-8" id="help-desk">app.help.help-desk.content</div>
          </div>
          <div className="row help-row">
              <div className="col-sm-4"><label htmlFor="help-emergency">app.help.emergency.title</label></div>
              <div className="col-sm-8" id="help-emergency">app.help.emergency.content</div>
          </div>
          <div className="row help-row" id="help-last">
              <div className="col-sm-4"><label htmlFor="help-feedback">app.help.general-feedback.title</label></div>
              <div className="col-sm-8" id="help-feedback"><a href="app.help.general-feedback.content" target="_blank">app.help.general-feedback.content</a></div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={handleCloseHelp}>Close</button>
        </Modal.Footer>
      </Modal>
  </div>
  );
}

export default Header;
