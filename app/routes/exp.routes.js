'use strict';

var exp = require('../controllers/exp.controller');

module.exports = function (app) {

  // Get results
  app.route('/api/exp')
    .get(exp.list)


  
};