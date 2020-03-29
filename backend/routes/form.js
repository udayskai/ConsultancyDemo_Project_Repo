
let express = require('express');
let router = express.Router();

router.get("/form", (req, res) => {
    console.log(req.body);
    res.status(200).send({ message: "data is posted successfully" })
})

module.exports = router;