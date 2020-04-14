import React, { Component } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap';

//IMG COMP
import InputTag from '../inputs/input-component'




export default class form extends Component {


    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            phonenumber: "",
            age: "18",
            state: "Maharashtra",
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
        data.append('price', this.state.age);
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
        if (!this.state.tags || this.state.tagsArray.length > 5) { return null }
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

                        {/* files*/}
                        <div className=" col-lg-3  col-md-3 " >
                            <input type="file" id="photo" name="photo" placeholder="Photo"
                                onChange={this.img} value={this.state.value}
                                style={{ backgroundColor: "#EEfFDF", width: "max-fit", height: "3rem" }}
                                className=" col-lg-10 col-sm-12 form-control " />
                        </div>

                        <div className="col-lg-7 col-md-7 mt-2   subbox2">
                            {/* FirstName */}
                            <input type="text" name="firstname" placeholder="Firstname"
                                pattern="[a-z,A-Z]{3,10}" value={this.state.firstname} onChange={this.onchangemethod}
                                className="form-control col-lg-11" />

                            {/* LastName */}
                            <input type="text" className="ml-0 mt-3 form-control col-lg-11 "
                                name="lastname" placeholder="Lastname" value={this.state.lastname}
                                onChange={this.onchangemethod} />

                            {/* row 2  Email*/}
                            <div className="row mt-3">
                                <div className="col-lg-12">
                                    <InputTag type="email" className="col-lg-11 form-control" name="email"
                                        placeholder="Email" value={this.state.email} onChange={this.onchangemethod}
                                    />
                                </div>
                            </div>

                            {/* row 3 */}
                            <div className="row mt-3">
                                <div className="col-lg-12">
                                    <input type="text" className="col-lg-11 form-control" name="phonenumber"
                                        placeholder="+91" value={this.state.phonenumber} onChange={this.onchangemethod} />
                                </div>
                            </div>

                            {/* in test row 4 price range */}
                            <div className="row mt-3" >
                                <div className="col-lg-11 " >
                                    <input type="range" min="1" max="100" name="age"
                                        onChange={this.onchangemethod} value={this.state.age} id="myRange" />
                                    <span id="myOwnSpan"> {this.state.age}</span>
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
                                    <input type="text" className="col-lg-11 form-control" name="address"
                                        placeholder="Address" value={this.state.address} onChange={this.onchangemethod}
                                    />
                                </div>
                            </div>

                            {/* row 7 tags */}
                            <div className="row mt-3">
                                <div className="col-lg-12 btn-group">
                                    <input type="text" className="col-lg-8 col-sm-6 form-control" name="tags"
                                        placeholder="Tags" value={this.state.tags} onChange={this.onchangemethod}
                                    />

                                    <button className="col-lg-2 col-sm-6 btn btn-outline-dark bg-light" type="button" onClick={this.addinarray} > Add</button>
                                </div>
                                <section className="col-md-12 mt-2">
                                    {
                                        this.state.tagsArray.map((data, index) => (
                                            <button type="button" className="btn btn-danger btn-sm mr-1" key={data + index} onClick={() => { this.handletagmethod(data) }}> {data}</button>))
                                    }
                                </section>
                            </div>

                            {/* submits */}
                            <hr />
                            <div className="row m-3">
                                <div className="col-md-6 col-sm-12 mx-auto ">
                                    <Button className="btn btn-block mt-2" variant="dark" type="submit" onClick={this.props.close}>
                                        Cancel
                                     </Button>
                                </div>
                                <div className="col-md-6  col-sm-12  mx-auto ">
                                    <Button className="btn btn-block mt-2" variant="primary" type="submit">
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





