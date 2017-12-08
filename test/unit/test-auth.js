var proxyquire = require('proxyquire');
var assert = require('assert');
var util = require('util');
var config = require('../../config');

// Sample setUp call - note this is called once, before the other tests in this file are run
exports.setUp = function(finish) {
  finish();
};

// Sample tearDown - note this is called once, after all other tests have been run in this file
exports.tearDown = function(finish) {
  finish();
};

exports.it_should_test_checkCredentials = function(finish) {
    var res;
    var fh = {
        service: (options, cb) => {
            if (options.guid === config.AD_MBAAS 
                && options.method === 'POST' 
                && options.path === '/api/v1/login'
                && options.headers.Authorization === 'Basic dXNlcm5hbWU6cGFzc3dvcmQ='
                && options.headers.adGroup === config.AD_Group );
            res = {
                statusCode: 200
            }
            cb(null, true, res);
        }
    }

    var auth = proxyquire('../../lib/auth', {'fh-mbaas-api': fh});
    var headers = {
        "Authorization": "Basic dXNlcm5hbWU6cGFzc3dvcmQ="
    }
    var req = {
        method: 'POST',
        url: '/',
        headers: headers
    }
    auth.checkCredentials(req)
    .then(response => {
        assert.equal(response, true);
        finish();
    })
    .catch(err => {
        assert.ok(!err, 'Unexpected error: ' + util.inspect(err));
    })
}