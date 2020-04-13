import React from 'react';
import { Modal } from 'react-bootstrap';



export default function modal(props) {
    return (
        <div>
            <Modal
                show={props.show}
                onHide={props.close}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header closeButton className="bg-danger">
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {props.children}
                </Modal.Body>
            </Modal>
        </div>
    )
}
