const express = require('express');
const logger = require('./logging');

function requestInfoString(req) {
    var result = req.ip + ' ' + req.originalUrl;
    return result;
};

var app = express();

app.get('/', (req, res) => {
    logger.info('GET 200 ' + requestInfoString(req));
    res.sendStatus(200);
});

const httpPort = process.env.PORT || 3000;

app.listen(httpPort, () => {
    logger.info(`request-to-log app listening on port ${httpPort}...`);
});