import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function MyModal(props) {

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{props.modalData[0]?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                >
                <Form.Label>Description</Form.Label>
                <button type="button" style={{'float':'right'}} className={'btn btn-sm '+((props.modalData[0]?.status==='Active')?'btn-primary':'btn-success')}>{props.modalData[0]?.status}</button>
                <Form.Control as="textarea" disabled rows={3} value={props.modalData[0]?.description}/>
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default MyModal;