const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

var url = "mongodb://localhost:27017/mydata";

// connection with Database
const mongoDB = process.env.MONGODB_URI || url;

mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const product = require('./routes/productRoute');

app.use('/product',product)

let port = 8000;

app.listen(port, () =>{
    console.log('Server is up and running on port numner ' + port);
})