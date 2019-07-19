import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./style.scss";
import Info from './messages';

function Footer() {
  return (
    <Container className="footer" tabIndex="0">
      <Row className="justify-content-md-center">
        <Col>
          <span className="footer-content">{Info.about["developed-by"]}</span>
          <span className="footer-content">{Info.address.street + ',' + Info.address.city + '' + Info.address.state}</span>
          <span className="footer-content footer-end">App version: {Info.about["version-number"]}</span>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
