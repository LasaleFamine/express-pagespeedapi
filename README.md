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
## Install and start
```sh
$ git clone https://github.com/LasaleFamine/express-pagespeedapi.git [optional name]
$ npm install
$ node app 
```
This will start the application in **development** mode.
## Configuration
#### Cross Origin
You may want change the **Access-Control-Allow-Origin** header of this webserver and allow your domain.
Inside `/config/express.js`:
```js
res.setHeader('Access-Control-Allow-Origin', 'godev.space');
```
Change with:
```js
res.setHeader('Access-Control-Allow-Origin', '[yourDomainName]');
```
**Note:** you can also allow every Cross Origin request with `*` symbol, replacing your domain name.
#### Root route
You may want change your root path application.
Inside `/app/routes/exp.routes.js`:
```js
app.use('/pgspeedService', router);
```
Change with:
```js
app.use('/[yourRootRoute]', router);
```
#### Listening port
You may want change your listening port.
Inside `/config/config.js` you can change the port for:
- development
- test
- production

## Usage
```
yourserver.com:8080/api/exp?url=http://example.com
```
This will return a Json with all the data from Google Page Speed Api about the url you passed.

## Raccomandation
I would suggest to run this application under a reverse-proxy webserver (easy setup with Nginx). I also suggest to run this app with [PM2](https://github.com/Unitech/pm2)  