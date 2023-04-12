//mongoDB configuration
var config = {};

config.app = {};
config.server = {};
config.db = {};

//server vars

port = process.env.PORT || 5678;
config.server.port = port;


//MongoDB Creds
config.db.host = 'cluster0.dtxnnqa.mongodb.net/';
config.db.port = 270187;
config.db.user = 'admin';
config.db.pass ='admin';
config.db.name = 'weatherdb'
config.db.collection = 'weather'

module.exports = config;
