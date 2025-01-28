const express = require('express');
const bodyParser = require('body-parser');

const logger = require('./logging');

function requestInfoString(req) {
    var result = req.ip + ' ' + req.originalUrl;
    return result;
};

var app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    logger.info('GET 200 ' + requestInfoString(req));
    res.sendStatus(200);
});

app.put('/', (req, res) => {
    logger.info('PUT 200 ' + requestInfoString(req));
    logger.info(JSON.stringify(req.body));
    res.sendStatus(200);
});

app.post('/', (req, res) => {
    logger.info('POST 200 ' + requestInfoString(req));
    logger.info(JSON.stringify(req.body));
    res.sendStatus(200);
});

const httpPort = process.env.PORT || 3000;

app.listen(httpPort, () => {
    logger.info(`request-to-log app listening on port ${httpPort}...`);
});