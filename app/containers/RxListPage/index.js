import React, { useState, useEffect } from 'react';
import { Container, Dropdown, Row, Col, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import ImportantModal from 'components/Modals/ImportantModal';

import ArrowBackIcon from 'img/icon-arrowBack.svg';
import ArrowForwardBlackIcon from 'img/icon-arrowForward-black.svg';
import InfoIcon from 'img/icon-info.svg';
import './style.scss';
import Data from './fakedata';


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
                            Refill Status 
                            <img src={InfoIcon} alt="info" style={{ width: '17px', height: '17px', marginLeft: '10%'}}/>
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
                        <Button className="refill-detail" variant="light" aria-label="See details for Prescription Number">See details
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
    let [data, setData] = useState(Data);

    let [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

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
        let selectAllButton = document.getElementsByClassName("selectall")[0];
        let unselectButton = document.getElementsByClassName("unselect")[0];
        let items = [];
        for (let i = 0; i < checkElements.length; i++) {
            checkElements[i].checked = true;
            items.push(checkElements[i].value);
        }
        setSelectedItems(items);
        selectAllButton.style.display = 'none';
        unselectButton.style.display = 'block';
    }

    const unSelectAll = () => {
        let checkElements  = document.getElementsByClassName("refillcheck");
        let selectAllButton = document.getElementsByClassName("selectall")[0];
        let unselectButton = document.getElementsByClassName("unselect")[0];

        for (let i = 0; i < checkElements.length; i++) {
            checkElements[i].checked = false;
        }
        setSelectedItems([]);
        selectAllButton.style.display = 'block';
        unselectButton.style.display = 'none';

    }

    const sort = (e) => {
        const sortOrder = e.target.dataset['asc'];
        const sortVal = e.target.dataset['sort'];
        console.log(sortOrder, sortVal);
        let sorted = _.sortBy(data, function (item) {
            console.log(item[sortVal]);
            return item[sortVal];
        });
        console.log("!sortOrder", !sortOrder);
        if (!sortOrder) {
            console.log("array should be reversed");
            sorted.reverse();
        }
        console.log("sorted data:", sorted);
        setData(sorted);
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
                                <Dropdown.Item data-asc="true" onClick={sort} data-sort="prescriptionName">Medication (A to Z)</Dropdown.Item>
                                <Dropdown.Item data-asc="false" onClick={sort} data-sort="prescriptionName">Medication (Z to A)</Dropdown.Item>
                                <Dropdown.Item data-asc="true" onClick={sort} data-sort="facilityName">Facility (A to Z)</Dropdown.Item>
                                <Dropdown.Item data-asc="false" onClick={sort} data-sort="facilityName"> Facility (Z to A)</Dropdown.Item>
                                <Dropdown.Item data-asc="true" onClick={sort} data-sort="dispensedDate">Dispensed Date (Newest to Oldest)</Dropdown.Item>
                                <Dropdown.Item data-asc="false" onClick={sort} data-sort="dispensedDate">Dispensed Date (Oldest to Newest)</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </Container>
            <Container id="refillListContainer">
                <Row>
                   <Button className="selectall" variant="light" style={{marginLeft: "auto"}} onClick={selectAll}>Select All</Button>
                    <Button className="unselect" variant="light" style={{marginLeft: "auto", display: "none"}} onClick={unSelectAll}>Unselect All</Button>
                </Row>
                <div className="list-count" tabIndex="0">
                    <strong><span className="selectCount">{selectedItems.length}&nbsp;</span>Selected / {data.length ? data.length : null} Refillable Prescriptions</strong> 
                </div>
                <div className="link-items">
                    {data.length ? renderItems(data, addItem) : <div className="link-items"><p>No Records found.</p></div>}
                </div>
                <Row style={{ padding: '10px' }}>
                    <Button 
                        onClick={handleShow}
                        className="refillbut" 
                        variant="light"
                         style={{marginLeft: "auto"}} 
                         tabIndex="-1">
                             Refill Selected
                    </Button>
                </Row>
             </Container>
             <ImportantModal 
                    show={show}
                    title={'Confirmation'}
                    content={'Are you sure you would like to refill all prescriptions?'}
                    isNoButton={true}
                    isYesButton={true}
                    onHide={handleClose}
             />
        </Container>
    )
}

export default RxList;