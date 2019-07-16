import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Dropdown, Container, Row, Col } from 'react-bootstrap';
import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
import $ from 'jquery';

function Header() {
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
                  <li><a href="{{launchpad}}">Return to Launchpad</a></li>
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
          <a href="#" id="about" role="button" data-toggle="modal" data-target="#about-modal" aria-controls="about-modal">About</a>
          <a href="#" id="help" role="button" data-toggle="modal" data-target="#help-modal" aria-controls="help-modal">Help</a>
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

  </div>
  );
}

export default Header;
