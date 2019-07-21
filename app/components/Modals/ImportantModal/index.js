import React from 'react';
import { Container, Modal, Button } from 'react-bootstrap';
import './style.scss';

function ImportantModal(props) {
    return (
      <Modal show={props.show} aria-labelledby="importantTitle">
        <Modal.Header className="important-header">
          <Modal.Title id="importantTitle" className="important-title">
            <h4>{props.title}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="important-body">
          <Container>
           <p>{props.content}</p>  
          </Container>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          {props.isNoButton ? <Button variant="light" onClick={props.onHide}>No</Button> : null}
          {props.isYesButton ? <Button variant="secondary" onClick={props.onHide}>Yes</Button> : null}
        </Modal.Footer>
      </Modal>
    );
}

export default ImportantModal;