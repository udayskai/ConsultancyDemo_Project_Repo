import React, { Component } from 'react';
import './home.css';
import { Navbar } from './navbar';
import { Modal, Button } from 'react-bootstrap'


class Mainhome extends Component {


    constructor(props) {
        super(props)
        this.state = {
            show: true,
            firstname: "",
            lastname: "",
            email: "",
            phonenumber: "",
            price: "50",
            state: "",
            address: "",
            tags: "",
            tagsArray: []
        }
    }


    // Methods
    handletagmethod = (data) => {
        console.log(data, this.state.tagsArray)
        let newArray = this.state.tagsArray.filter((item) => (item !== data));
        this.setState({ tagsArray: newArray })
        console.log(newArray)
    }


    // on chnage
    onchangemethod = (e) => {
        // let data = document.querySelector(".slider");
        let myRange = document.getElementById('myRange');
        let myOwnSpan = document.getElementById('myOwnSpan')
        console.log(myRange.value, myOwnSpan.style.left)
        myOwnSpan.style.left = `${myRange.value - 1}%`
        this.setState({ [e.target.name]: e.target.value });
    }

    // task add in array
    addinarray = () => {
        this.setState({ tagsArray: [...this.state.tagsArray, this.state.tags] })
        this.setState({ tags: "" })
        console.log(this.state.tagsArray)
    }

    // on submit 
    onSubmitMethod = (e) => {
        e.preventDefault();

        let Data = {
            fistname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            phonenumber: this.state.phonenumber,
            price: this.state.price,
            state: this.state.state,
            address: this.state.address,
            tagsArray: this.state.tagsArray,
            photo: this.state.photo,
        }
        console.log(Data);
    }

    // modal handler
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

                    <Modal
                        show={this.state.show}
                        onHide={this.handleClose}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                    >
                        <Modal.Header closeButton className="bg-danger">
                            <Modal.Title>Register</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <form onSubmit={this.onSubmitMethod}>

                                <div className="row "  >
                                    <div className="subbox1 col-lg-3 col-md-3 ">
                                        {/* <input type="file" className="custom-file-input" id="validatedCustomFile" placeholder="image" /> */}
                                        <input type="file" name="photo" placeholder="pic" className=" col-lg-12 form-control col-md-12" />
                                    </div>

                                    <div className="col-lg-7 col-md-7 subbox2">
                                        <input type="text"
                                            name="firstname"
                                            placeholder="FirstName"
                                            pattern="[a-z,A-Z]{3,10}"
                                            vlaue={this.state.firstname}
                                            onChange={this.onchangemethod}
                                            className="form-control col-lg-11" />

                                        <input type="text"
                                            className="ml-0 mt-3 form-control col-lg-11 "
                                            name="lastname"
                                            placeholder="LastName"
                                            vlaue={this.state.lastname}
                                            onChange={this.onchangemethod} />

                                        {/* row 2 */}
                                        <div className="row mt-3">
                                            <div className="col-lg-12">
                                                <input type="email"
                                                    className="col-lg-11 form-control"
                                                    name="email"
                                                    placeholder="Email"
                                                    vlaue={this.state.email}
                                                    onChange={this.onchangemethod} />
                                            </div>
                                        </div>


                                        {/* row 3 */}
                                        <div className="row mt-3">
                                            <div className="col-lg-12">
                                                <input type="text"
                                                    className="col-lg-11 form-control"
                                                    name="phonenumber"
                                                    placeholder="+91 37 ..."
                                                    vlaue={this.state.phonenumber}
                                                    onChange={this.onchangemethod} />
                                            </div>
                                        </div>

                                        {/* in test row 4 price range */}
                                        <div className="row mt-3" >
                                            <div className="col-lg-11 " >

                                                <input type="range" min="1" max="100" name="price"
                                                    onChange={this.onchangemethod}
                                                    value={this.state.price}
                                                    id="myRange" />
                                                <span id="myOwnSpan"> {this.state.price}</span>



                                            </div>
                                        </div>

                                        {/* row 5 state dropdown */}
                                        <div className="row mt-3">
                                            <div className="col-lg-12">
                                                <select id="state" name="state" onChange={this.onchangemethod} className="custom-select col-lg-11">
                                                    <option value="Maharashtra">Maharashtra</option>
                                                    <option value="Goa">Goa</option>
                                                    <option value="MP">MP</option>
                                                </select>

                                            </div>
                                        </div>


                                        {/* row 6 address */}
                                        <div className="row mt-3">
                                            <div className="col-lg-12">
                                                <input type="text"
                                                    className="col-lg-11 form-control"
                                                    name="address"
                                                    placeholder="Address"
                                                    value={this.state.address}
                                                    onChange={this.onchangemethod} />
                                            </div>
                                        </div>

                                        {/* row 7 tags */}
                                        <div className="row mt-3">
                                            <div className="col-lg-12">
                                                <input type="text"
                                                    className="col-lg-8 form-control"
                                                    name="tags"
                                                    placeholder="tags"
                                                    value={this.state.tags}
                                                    onChange={this.onchangemethod}
                                                />

                                                <button className="float-right" type="button" onClick={this.addinarray} > Add</button>
                                                <section>
                                                    {
                                                        this.state.tagsArray.map((data, index) => (
                                                            <button type="button" className="btn btn-success btn-sm mr-1" key={data + index} onClick={() => { this.handletagmethod(data) }}> {data}</button>))
                                                    }
                                                </section>
                                            </div>
                                        </div>
                                        {/* submits */}
                                        <hr />
                                        <div className="row m-3">
                                            <div className="col-md-6 mx-auto ">
                                                <Button variant="dark" type="submit" onClick={this.handleClose}>
                                                    Cancel
                                        </Button>
                                            </div>
                                            <div className="col-md-6 mx-auto ">
                                                <Button variant="primary" type="" onClick={this.handleClose}>
                                                    Submit </Button>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </form>
                        </Modal.Body>
                    </Modal>

                </div>

            </div >
        )
    }
}

export default Mainhome;
