var proxyquire = require('proxyquire');
var assert = require('assert');
var util = require('util');

// Sample setUp call - note this is called once, before the other tests in this file are run
exports.setUp = function(finish) {
  finish();
};

// Sample tearDown - note this is called once, after all other tests have been run in this file
exports.tearDown = function(finish) {
  finish();
};

exports.it_should_test_items_POST = function(finish) {

 
  var items = proxyquire('../../../lib/routes/items', {})();

  // mock request
  var req = {
    method: 'POST',
    url: '/',
    headers: [],
    pause: function(){},
    resume: function(){}
  };

  // mock response
  var res = {
    json: function(data) {
      assert.equal(data.length, 6);
      finish();
    },
    status: function(code) {
      assert.equal(code, 500);
      return {
        send: function(err){
          console.log(err);
        }
      }
    },
    setHeader: function(){}
  };

  // Invoke the /hello route, note the test finishes when the 'end' is called on our mock response above.
  items(req, res, function next(err){
    assert.ok(!err, 'Unexpected error: ' + util.inspect(err));
  });
};