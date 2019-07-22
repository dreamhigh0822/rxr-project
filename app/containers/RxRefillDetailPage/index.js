import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import ArrowBackIcon from 'img/icon-arrowBack.svg';
import InfoIcon from 'img/icon-info.svg';
import Data from '../RxListPage/fakedata';
import './style.scss';


function RxRefillDetail(props) {
    let [item, setItem] = useState({});
    useEffect(() => {
        console.log(props);
        let index = props.match.params['id'];
        setItem({...Data[index]});
    }, []);
    return (
        <Container>
            <Container id="refillDetailHeader">
                <Row>
                    <Col md="auto">
                        <Link to="/refillable-va-medications" className="title-back-btn" role="button" aria-label="Return to Home">
                            <img src={ArrowBackIcon} alt="" aria-hidden="true" style={{ width: "30px", height: "30px"}}/> 
                        </Link>
                    </Col>
                    <Col>
                        <h2 className="sm-phone-header" id="'content-title" tabIndex="0">Refill Details</h2>
                    </Col>
                </Row>
            </Container>
            <Container id="refillDetailContent">
                <Row>
                    <Col className="prescription-title">
                        <h4>{item.prescriptionName}</h4> 
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>Quantity:</Col>
                    <Col sm={6}><strong>{item.quantity}</strong></Col>
                </Row>
                <Row>
                     <Col sm={6}>
                         { 1 ? 
                         <>
                            Refill status
                            <img src={InfoIcon} alt="info" style={{ width: '20px', height: '20px'}} />
                         </> :
                         <>
                            Prescription status
                            <img src={InfoIcon} alt="info" style={{ width: '20px', height: '20px'}} />
                         </>
                        }
                    </Col>
                    <Col className="status-value">
                        <strong>{item.refillStatus}</strong>
                    </Col>
                 </Row>
                 <Row>
                     <Col sm={6}>Prescription Number</Col>
                     <Col sm={6}><strong>{item.prescriptionNumber}</strong></Col>
                 </Row>
                 <Row>
                     <Col sm={6}>VA Facility:</Col>
                     <Col sm={6}><strong>{item.facilityName}</strong></Col>
                 </Row>
                 <Row>
                     <Col sm={6}>Refills Left:</Col>
                     <Col sm={6}><strong>{item.refillRemaining}</strong></Col>
                 </Row>
                 <Row>
                     <Col sm={6}>Despensed Date:</Col>
                     <Col sm={6}><strong>{item.dispensedDate}</strong></Col>
                 </Row>
                 <Row>
                     <Col sm={6}>Last Refill Shipped</Col>
                     <Col sm={6}><strong>{item.refillDate}</strong></Col>
                 </Row>
                 <Row>
                     <Col sm={6}>Current Prescription Expires:</Col>
                     <Col sm={6}><strong>{item.expirationDate}</strong></Col>
                 </Row>
                 <br />
                 {1 ? <div className="center"><Button className="requestRefill">Request Refill</Button></div> : null}
            </Container>
        </Container>
    )
}

export default RxRefillDetail;