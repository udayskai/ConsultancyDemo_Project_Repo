import React, { Component } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap';

import InputTag from '../inputs/input-component'




export default class form extends Component {


    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            phonenumber: "",
            age: "50",
            state: "",
            address: "",
            tags: "",
            tagsArray: [],
            photo: null
        }
    }

    // On submit 
    onSubmitMethod = async (e) => {
        e.preventDefault();

        const data = new FormData()
        data.append('photo', this.state.photo);
        data.append('firstname', this.state.firstname);
        data.append('lastname', this.state.lastname);
        data.append('email', this.state.email);
        data.append('phonenumber', this.state.phonenumber);
        data.append('price', this.state.price);
        data.append('state', this.state.state);
        data.append('address', this.state.address);
        data.append('tagsArray', this.state.tagsArray);

        await axios.post("http://localhost:4000/post/form",
            data, {}).then((res) => { console.log(res); alert("Thank you"); this.props.close() });
    }


    // Remove Tags
    handletagmethod = (data) => {
        let newArray = this.state.tagsArray.filter((item) => (item !== data));
        this.setState({ tagsArray: newArray })
    }

    // Add Tags
    addinarray = () => {
        this.setState({ tagsArray: [...this.state.tagsArray, this.state.tags] })
        this.setState({ tags: "" })
    }


    // on Change
    onchangemethod = (e) => {
        let myRange = document.getElementById('myRange');
        let myOwnSpan = document.getElementById('myOwnSpan')
        myOwnSpan.style.left = `${myRange.value - 1}%`
        this.setState({ [e.target.name]: e.target.value });
    }

    //Image Save
    img = (e) => {
        this.setState({ photo: e.target.files[0] }, () => { console.log(this.state.photo); });
    }





    render() {
        return (
            <div>

                <form onSubmit={this.onSubmitMethod}  >
                    <div className="row">

                        {/* fileeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */}
                        <div className="subbox1 col-lg-3 col-md-3 ">
                            <input type="file"
                                id="photo" name="photo"
                                placeholder="Photo"
                                onChange={this.img}
                                value={this.state.value}
                                className=" col-lg-12 form-control col-md-12" />
                        </div>

                        <div className="col-lg-7 col-md-7   subbox2">
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
                                    <InputTag type="email"
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
                                    <Button variant="dark" type="submit" onClick={this.props.close}>
                                        Cancel
                                     </Button>
                                </div>
                                <div className="col-md-6 mx-auto ">
                                    <Button variant="primary" type="">
                                        Submit </Button>
                                </div>

                            </div>

                        </div>
                    </div>
                </form>

            </div>
        )
    }
}





