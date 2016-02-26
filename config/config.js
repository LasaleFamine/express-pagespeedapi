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
    //db: 'mongodb://localhost/'
  },

  test: {
    root: rootPath,
    app: {
      name: 'exp'
    },
    port: 8080,
    //db: 'mongodb://localhost/'
  },

  production: {
    root: rootPath,
    app: {
      name: 'exp'
    },
    port: 8080,
    //db: 'mongodb://localhost/'
  }
};

module.exports = config[env];
