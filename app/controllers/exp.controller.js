'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
    google = require('googleapis'),
    pagespeedonline;
//errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));


exports.list = function (req, res) {
 console.log(req.query);

  var apiVersion = "v2";
  var opts = req.query;

  pagespeedonline = google.pagespeedonline(apiVersion);
    pagespeedonline.pagespeedapi.runpagespeed(opts, function(error, req) {
      if (error) {
        return res.json(error);
      }
      return res.json(req);
    })
};