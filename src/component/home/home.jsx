import React, { Component } from 'react';
import './home.css';
import { Button } from 'react-bootstrap';


import { Navbar } from '../navbar/navbar.jsx';
import Modal from '../modal/modal';

import Form from '../Form/form'

class Mainhome extends Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    // modal handler
    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });


    render() {
        return (
            <div className="homeMainRoot">

                <div className="NavabrHolder" >
                    <Navbar />
                </div>
                <div className="logo">
                    Logo
                    </div>


                <Modal
                    close={this.handleClose}
                    Show={this.handleShow}
                    show={this.state.show} >

                    <Form close={this.handleClose} />
                </Modal>

                <div className="button">
                    <Button variant="dark" onClick={this.handleShow}>
                        Register
                   </Button>
                </div>

            </div >
        )
    }
}

export default Mainhome;


