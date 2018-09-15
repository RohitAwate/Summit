const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const env = process.env;
const port = 9090 || env.PORT;

const mongooseOptions = {
    useNewUrlParser: true
};

mongoose
    .connect('mongodb://' + env.MONGO_USERNAME + ':' + env.MONGO_PASSWORD + '@' + env.MONGO_URL, mongooseOptions)
    .then(console.log('Connected to database.'))
    .catch(err => console.log(err));

// Configuring the middle-ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log("Summit started on port " + port + ".")
});