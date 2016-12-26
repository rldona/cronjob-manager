const express = require('express');
const bodyParser = require('body-parser');
const crontabConverter = require('crontab-converter');

const crontabManager = require('./lib');
const db = require('./projects-mock');

const app = express();

app.use(bodyParser.json());

let cm = new crontabManager(db.projects());

console.log('Serer start at port 3000');

app.listen(3000);
