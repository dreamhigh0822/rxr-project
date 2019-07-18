import React from 'react';
import { Modal } from 'react-bootstrap';
import './style.scss';

function ImageModal(props) {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title class="important-title">Important Information</Modal.Title>
            </Modal.Header>
            <Modal.Body className="important-body">{props.content}</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
                OK
            </Button>
            </Modal.Footer>
        </Modal>
    )

}

export default ImageModal;