let mongoose = require('mongoose');

let Schema = mongoose.Schema({
    fistname: { type: String, require: true },
    // lastname: { type: String, require: true },
    // email: { type: String, require: true },
    // phonenumber: { type: Number, require: true },
    // price: { type: Number, require: true },
    // state: { type: String, require: true },
    // address: { type: String, require: true },
    // tagsArray: { type: String, require: true },
    photo: { type: String, require: true },
})

let Model = mongoose.model("userData", Schema);


module.exports = Model;