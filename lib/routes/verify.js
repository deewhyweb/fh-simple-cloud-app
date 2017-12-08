var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('../../config.js');
var baseLogName = 'Verfiy Route';
var log = require('fhlog').getLogger(baseLogName, {level: config.LOG_LEVEL});
var auth = require('../auth');
/**
 * Route to verify username / password
 */
function router () {
    var routes = new express.Router();
    routes.use(cors());
    routes.use(bodyParser());
    routes.post('/',  (req, res) => {
        auth.checkCredentials(req)
        .then( authResponse => {
            log.debug('Successful response from checkCredentials call ' , authResponse);
            res.json(authResponse);
        })
        .catch(authError => {
            log.debug('Error returned from checkCredentials call ' + authError);
            res.status(500).send({ error: 'Something failed!: ' + authError });
        })
    });
    return routes;
}

module.exports = router;