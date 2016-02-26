var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'exp'
    },
    port: 8080,
    //db: 'mongodb://localhost/cnservices-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'exp'
    },
    port: 8080,
    //db: 'mongodb://localhost/cnservices-development'
  },

  production: {
    root: rootPath,
    app: {
      name: 'exp'
    },
    port: 8080,
    //db: 'mongodb://localhost/cnservices-development'
  }
};

module.exports = config[env];
