import React, { useState, useEffect } from 'react';
import { Container, Dropdown, Row, Col, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ArrowBackIcon from 'img/icon-arrowBack.svg';
import UserMenuUpIcon from 'img/icon-userMenuUp.svg';
import ArrowForwardBlackIcon from 'img/icon-arrowForward-black.svg';
import data from './fakedata';


function renderItems(items, addItem) {
    return(
        items.map((item, index) => (
            <Row className="med-container" key={item.prescriptionId}>
                <Col lg={2} style={{textAlign: "center"}}>
                        <p><strong>Refill</strong></p>
                        <input type="checkbox" className="refillcheck" value={item.prescriptionId} name="prescription" onClick={addItem} />
                </Col>
                <Col lg={10}>
                    <div className="link-title blue"><strong>{item.prescriptionName}</strong></div>
                    <Row>
                        <Col xs={5}>
                            Refill Status - Popover
                        </Col>
                        <Col xs={7} className="text-capitalize status status-value"><strong>{item.refillStatus}</strong></Col>
                    </Row>
                    <Row>
                        <Col xs={5} > Prescription Number </Col>
                        <Col xs={7}><strong>{item.prescriptionNumber}</strong></Col>
                    </Row>
                    <Row>
                        <Col xs={5} valign="top"> VA Facility</Col>
                        <Col xs={7}><strong>{item.facilityName}</strong></Col>
                    </Row>
                    <Row>
                        <Col xs={5} valign="top">Dispensed Date</Col>
                        <Col xs={7}><strong>{item.dispensedDate}</strong></Col>
                    </Row>
                    <div className="center see-detail-link">
                        <Button className="refill-detail" aria-label="See details for Prescription Number">See details
                            <img src={ArrowForwardBlackIcon} className="forward" alt="" title="" aria-hidden="true" style={{ width: "20px", height: "20px"}} />
                        </Button>
                    </div>
                </Col>
            </Row>

        ))
    )
}

function RxList() {
    let [selectedItems, setSelectedItems] = useState([]);
    const addItem = (e) => {
        let index = selectedItems.indexOf(e.target.value)
        if ( index > -1 ) {
            let newOne = [...selectedItems];
            newOne.splice(index, 1);
            setSelectedItems(newOne);
        } else {
            setSelectedItems([
                ...selectedItems,
                e.target.value
            ]);
        }
    }

    useEffect(() => {
        console.log(selectedItems);
    }, [selectedItems]);

    const selectAll = () => {
        let checkElements  = document.getElementsByClassName("refillcheck");
        let items = [];
        for (let i = 0; i < checkElements.length; i++) {
            checkElements[i].checked = true;
            items.push(checkElements[i].value);
        }
        setSelectedItems(items);
    }

    const unSelectAll = () => {
        let checkElements  = document.getElementsByClassName("refillcheck");
        for (let i = 0; i < checkElements.length; i++) {
            checkElements[i].checked = false;
        }
        setSelectedItems([]);
    }
    return (
        <Container>
            <Container id="refillHeaderContainer">
                <Row >
                    <Col md="auto">
                        <Link to="/" className="title-back-btn" role="button" aria-label="Return to Home">
                            <img src={ArrowBackIcon} alt="" aria-hidden="true" style={{ width: "30px", height: "30px"}}/> 
                        </Link>
                    </Col>
                    <Col>
                        <h2 className="sm-phone-header" id="'content-title" tabIndex="0">Refillable VA Prescription</h2>
                    </Col>
                    <Col md="auto">
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                Sort
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Medication (A to Z)</Dropdown.Item>
                                <Dropdown.Item>Medication (Z to A)</Dropdown.Item>
                                <Dropdown.Item>Facility (A to Z)</Dropdown.Item>
                                <Dropdown.Item>Facility (Z to A)</Dropdown.Item>
                                <Dropdown.Item>Dispensed Date (Newest to Oldest)</Dropdown.Item>
                                <Dropdown.Item>Something else</Dropdown.Item>
                                <Dropdown.Item>Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </Container>
            <Container id="refillListContainer">
                <Button className="selectall" style={{marginLeft: "50px"}} onClick={selectAll}>Select All</Button>
                <Button className="unselect" style={{marginLeft: "50px"}} onClick={unSelectAll}>Unselect All</Button>
                <div className="list-count" tabIndex="0"><span className="selectCount">{selectedItems.length}&nbsp;</span>Selected / {data.length ? data.length : null} </div>
                <div className="link-items">
                    {data.length ? renderItems(data, addItem) : <div className="link-items"><p>No Records found.</p></div>}
                </div>
                <Button className="refillbut" style={{marginLeft: "50px"}}>Refill Selected</Button>
             </Container>
             
             <Modal>

             </Modal>
        </Container>
    )
}

export default RxList;