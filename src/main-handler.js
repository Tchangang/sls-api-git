'use strict';

const MongoClient = require('mongodb').MongoClient;

let mongoURI = ;
let cachedDb = null;

module.exports.main = async (event, context, callback) => {
	// Say lambda, please exist when i say return
	context.callbackWaitsForEmptyEventLoop = false;

	console.log(process.env['MONGODB_ATLAS_CLUSTER_URI']);
	var uri = process.env['MONGODB_ATLAS_CLUSTER_URI'];
	// if mongoURI is not null, same container was used
	if (mongoURI != null) {
        processEvent(event, context, callback);
    }else{
    	// if mongoURI is null, reconnect to mongoDB
        mongoURI = uri;
        console.log('the Atlas connection string is ' + mongoURI);
        processEvent(event, context, callback);
    } 
}

function processEvent(event, context, callback) {
    console.log('Calling MongoDB Atlas from AWS Lambda with event: ' + JSON.stringify(event));
    // return anything you want
    // let response = JSON.stringify({
    //     statusCode: 400,
    //     message:'Missing params',
    //     body:event
    // })
    callback(true)
}