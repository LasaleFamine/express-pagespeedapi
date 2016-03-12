'use strict';

var exp = require('../controllers/exp.controller');

var express = require('express');
var router = express.Router();

module.exports = function (app) {

	router.route('/api/exp')
		.get(exp.list);

	// Define route of the application
	// godev.space/pgspeedService
	app.use('/pgspeedService', router);


  
};