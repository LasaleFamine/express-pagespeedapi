# Express-PageSpeedApi
## Description
##### Part of the final project of the CS50x2016.
Simple NodeJs-Express application with the usage of the Google Page Speed Api.
## Tree
```
├── app
│   ├── controllers
│   │   └── exp.controller.js
│   └── routes
│       └── exp.routes.js
├── app.js
├── config
│   ├── config.js
│   └── express.js
├── package.json
└── README.md
```
## Installation
```sh
$ git clone https://github.com/LasaleFamine/express-pagespeedapi.git [optional name]
$ npm install
$ node app
```
## Usage
```
yourserver.com:8080/api/exp?url=http://example.com
```
This will return a Json with all the data from Google Page Speed Api about the url you passed.
