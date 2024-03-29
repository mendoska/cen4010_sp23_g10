//github
//https://github.com/mendoska/cen4010_sp23_g10/
//setting up node js 
const express = require('express')
const app = express()
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
//need for public
app.use(express.static('./public'));

//app.use(express.static(path.join(__dirname, 'public')));




//Mongodb connection
const MongoClient = require('mongodb').MongoClient;
var config = require('./config.js'); 




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


app.get('/weather-api/', function (req,res){
  console.log ("connected to backend successfully");
  
})


app.post('/sign-up', async function(req, res) {
    var record_id = new Date().getTime();  
  
    //creating object to send to mongo  
  var customer = {
      "_id":record_id,
      "first_name":req.body.first_name,
      "last_name":req.body.last_name,
      "email":req.body.email_address,
      "zip_code":req.body.zip_code
    };
  
  
    //for testing
    console.log("the data inside the customer object inside the post function is:")
    console.log(typeof customer);
    console.dir(customer);
  
    var dbo = client.db(config.db.name);
  
    MongoClient.connect(uri, { useUnifiedTopology: true }, function(err,client) {
      console.log("connected into Mongo");
  
    dbo.collection(config.db.collection).insertOne(customer, function (err,result){
  
      if(err) throw err;
      var rsp_obj = {};
      console.log("inserted document!");
      console.log(result);
      rsp_obj.message = "Customer added successfully";
      client.close();
      res.status(200).send(rsp_obj.message);
      console.log("The data inside the response object inside the post function is: ");
      console.dir(rsp_obj);
    })
  
  });//end mongoclient connect
  }); //end post method




//changing ports to work with Heroku


port = process.env.PORT || 5678;
var listener = app.listen(port);
//app.listen(5678); //start the server
console.log('Server is running...');