let express = require('express');
let mongoose = require('mongoose');
let PostForm = require('./routes/form')
let cors = require('cors')


let app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static('uploads'));

mongoose.connect('mongodb://localhost/DempConsultancy', { useNewUrlParser: true, useUnifiedTopology: true }).then((resolve) => {
    console.log("connected")
})


app.listen(4000, () => {
    console.log("Server is Online")
})


app.use("/post", PostForm);