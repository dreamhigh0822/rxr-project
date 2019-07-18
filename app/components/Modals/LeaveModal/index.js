import React from 'react';
import { Container } from 'react-bootstrap';
import './style.scss';

function LeaveModal(props) {
    return (
      <Modal {...props} aria-labelledby="leavingSiteTitle">
        <Modal.Header className="important-header">
          <Modal.Title id="leavingSiteTitle" className="important-title">
            You are leaving Rx leaving Refill to go to an external website.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="important-body">
          <Container>
           <div className="checkbox">
               <label>
                   <input type="checkbox" value="" id="displayModal" />
                   Do not show this message again.
               </label>
            </div>   
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Cancel</Button>
          <Button variant="primary" onClick={props.onHide}>Continue</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default LeaveModal;