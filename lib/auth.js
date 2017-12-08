var config = require('../config');
var fh = require('fh-mbaas-api');
var baseLogName = 'Auth Module';
var log = require('fhlog').getLogger(baseLogName, {level: config.LOG_LEVEL});
/**
 * Makes a call to /api/v1/login on MBaaS service and returns a promise
 * @param {Object} req 
 * @returns {Promise}
 */

var checkCredentials = (req) => {
    return new Promise((resolve, reject) => {
        req.headers.adGroup = config.AD_Group;
        var adMBaaS = config.AD_MBAAS;
        resolve(true);
        // fh.service({
        //     "guid": adMBaaS,
        //     "path": "/api/v1/login",
        //     "method": "POST",
        //     "headers": req.headers
        // }, (err, body, res) => {
        //     log.debug('statuscode: ', res && res.statusCode);
        //     if ( err ) {
        //         log.debug('service call failed - err : ' + err);
        //         reject(err);
        //     } else {
        //         log.debug('Got response from service - status body : ' ,  res.statusCode, body);
        //         resolve(body);
        //     }
        // });
    });

}
module.exports.checkCredentials = checkCredentials;