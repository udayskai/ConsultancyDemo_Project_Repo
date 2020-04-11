let mongoose = require('mongoose');

let Schema = mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    phonenumber: { type: Number },
    price: { type: Number },
    state: { type: String },
    address: { type: String },
    tagsArray: { type: String, },
    photo: { type: String, require: true },
})

let Model = mongoose.model("userData", Schema);


module.exports = Model;