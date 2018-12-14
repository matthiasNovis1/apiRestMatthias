var config = {};

config.mongodb = {};
config.server = {};


config.mongodb.username = process.env.MONGODB_USERNAME || '';
config.mongodb.password =  process.env.MONGODB_PASSWORD || '';
config.mongodb.host =  process.env.MONGODB_HOST || 'localhost';
config.mongodb.port = process.env.MONGODB_PORT || 27017;
config.mongodb.databaseName = process.env.MONGODB_NAME || 'restApiTp';

module.exports = config;
