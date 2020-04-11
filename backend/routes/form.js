
let express = require('express');
let router = express.Router();
let Model = require('../db/db.js')


//includes multer
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true)
    }
    else {
        cb(null, false)
    }
};

const uploads = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
})



// get exmaple test only
router.get("/getform", async (req, res) => {
    let response = await Model.find()
    res.status(200).send({ data: response, message: "data is posted successfully" })
});



//post method 
router.post('/form', uploads.single('photo'), async (req, res) => {

    let Data = new Model({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        price: req.body.price,
        state: req.body.state,
        address: req.body.address,
        tagsArray: req.body.tagsArray,
        photo: "http://localhost:4000/" + req.file.path,
    })

    await Data.save();
    console.log(Data)
    res.send({ Data: Data, response: "data is saved in database", path: "http://localhost:4000/" + req.file.path })

})

module.exports = router;