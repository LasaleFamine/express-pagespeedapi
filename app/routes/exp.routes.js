'use strict';

var exp = require('../controllers/exp.controller');

module.exports = function (app) {
  // Articles collection routes

  // Get articles or create new
  app.route('/api/exp')
    .get(exp.list)

  
};