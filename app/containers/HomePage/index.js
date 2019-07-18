import React from 'react';
import links from './messages';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './style.scss';
import Image1 from 'img/icon-refillableMeds.svg';
import Image2 from 'img/icon-delivery.svg';
import Image3 from 'img/icon-rxHistory.svg';
import Image4 from 'img/icon-links.svg';
import ForwardIcon from 'img/icon-arrowForward.svg';

function Item({url, img, img_alt, title}) {
  return (
    <div className="home-button">
      <Link to={url} role="button">
        <img src={img} className="home-button-icon" alt={img_alt} />
        <img src={ForwardIcon} className="home-button-arrow" alt="" />
        <h3>{title}</h3>
      </Link>
    </div>
  )
}

function HomeLinks() {
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <Item 
            url={links[0].url}
            img={Image1}
            img_alt={links[0].img_alt}
            title={links[0].title}
          />
        </Col>
        <Col sm={6}>
          <Item 
            url={links[1].url}
            img={Image2}
            img_alt={links[1].img_alt}
            title={links[1].title}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <Item 
            url={links[2].url}
            img={Image3}
            img_alt={links[2].img_alt}
            title={links[2].title}
          />
        </Col>
        <Col sm={6}>
          <Item 
            url={links[3].url}
            img={Image4}
            img_alt={links[3].img_alt}
            title={links[3].title}
          />
        </Col>

      </Row>
    </Container>
  )
}

export default HomeLinks;