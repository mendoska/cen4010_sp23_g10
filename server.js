//setting up node js 
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const fs = require('fs');
const glob = require("glob")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./weather'));

//Mongodb c
const MongoClient = require('mongodb').MongoClient;
var config = require('./config'); 

//testing mongodb connection

//ading mongodb
//config file
const uri = 'mongodb+srv://'+config.db.user+':'+config.db.pass+'@cluster0.6ctttto.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {useNewUrlParser:true});


//check if it connects to mongodb correctly
client.connect((err)=>{
  if (err)
    console.log(err);
  else
    console.log("Connected Successfully");
})


app.listen(5680); //start the server
console.log('Server is running...');