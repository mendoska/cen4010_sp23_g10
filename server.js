//setting up node js 
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const fs = require('fs');
const glob = require("glob")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./weather'));

//Mongodb connection 
const MongoClient = require('mongodb').MongoClient;
var config = require('./config'); 



app.listen(5680); //start the server
console.log('Server is running...');