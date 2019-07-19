import React from 'react';
import messeges from './messeges';
import { Container, Row, Popover, OverlayTrigger, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ArrowBack from 'img/icon-arrowBack.svg';
import IconInfo from 'img/icon-info.svg';
import './style.scss';

function GoBack({title, description}) {
    return (
        <div>
            <Row className="title-area">
                <button type="button" className="title-back-btn" onClick={() => {}}>
                    <Link to="/"><img src={ArrowBack} alt="Return to Previous Page" style={{width: '30px'}} /></Link>
                </button>
                <h2 id="content-title">{title}</h2>
            </Row>
            
            <div className="linksDescription">
                <p dangerouslySetInnerHTML={{__html: description}}></p>
            </div>
        </div>
    )
}
function Description({ description, ...props }) {
    return (<span {...props} tabIndex="0" dangerouslySetInnerHTML={{__html: description}}></span>);
}

function Item({title, description, target, url}) {
    const popover = (
        <Popover>
            <div className="popover-title">
              <strong> {title} </strong>
            </div>
            <div className="popover-content">
                {description}
            </div>
        </Popover>
      );
    return (
        <div>
            <div>
                <a target={target} href={url} data-content="exit" className="item-title">{title}</a>
            </div>
            <OverlayTrigger placement="right" overlay={popover} trigger="focus">
                <div className="linksDescription">
                    <Description description={description} />
                </div>
            </OverlayTrigger>
        </div>
    )
}
  

function MedicationInfo() {
    const items = messeges.links.map((item, index) => 
        <Item
            key={index}
            title={item.title}
            description={item.desc}
            target={item.target}
            url={item.url} 
        />
    )
    return (
        <Container>
            <GoBack
                title={messeges.title}
                description={messeges.desc} 
            />
            {items}
        </Container>
    )
}

export default MedicationInfo;
