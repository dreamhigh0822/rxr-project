import React from 'react';
import { Container } from 'react-bootstrap';
import './style.scss';

function ImportantModal(props) {
    return (
      <Modal {...props} aria-labelledby="importantTitle">
        <Modal.Header className="important-header">
          <Modal.Title id="importantTitle" className="important-title">
            Important Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="important-body">
          <Container>
           <p>{props.content}</p>  
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>OK</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default ImportantModal;