//mongoDB configuration
var config = {};

config.app = {};
config.server = {};
config.db = {};

//server vars
config.server.port = 5680;

//MongoDB Creds
config.db.host = 'cluster0.dtxnnqa.mongodb.net/';
config.db.port = 270187;
config.db.user = 'admin';
config.db.pass ='admin';
config.db.name = 'weatherdb'
config.db.collection = 'weather'

module.exports = config;
