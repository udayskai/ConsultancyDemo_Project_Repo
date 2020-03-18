import React, { Component } from 'react';
import './home.css';
import { Navbar } from './navbar';
import { Modal, Button } from 'react-bootstrap'


class Mainhome extends Component {


    constructor(props) {
        super(props)
        this.state = {
            show: false,

        }
    }

    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });


    render() {
        return (
            <div className="homeMainRoot">
                <div className="logo">
                    Logo
               </div>

                <div className="NavabrHolder" >
                    <Navbar />
                </div>

                <div className="button">
                    {/* <button>Register</button> */}

                    <Button variant="dark" onClick={this.handleShow}>
                        Register
                   </Button>

                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton style={{ backgroundColor: "blue" }}>
                            <Modal.Title>Register</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>

                            <input type="text" />

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="dark" onClick={this.handleClose}>
                                Cancel
          </Button>
                            <Button variant="primary" onClick={this.handleClose}>
                                Submit
          </Button>
                        </Modal.Footer>
                    </Modal>

                </div>

            </div>
        )
    }
}

export default Mainhome;
