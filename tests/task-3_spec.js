var task3 = require('../task-3');
var moment = require('moment');
var fs = require('fs');

var formatDate = function(date) {
    return moment().format('L HH:mm:ss');
};


exports['getTimestamp'] = function (test) {
  test.equal(task3.getTimestamp('../task3'),)
  test.equal(doubled.calculate(2), 4);
  test.throws(function () { task3.getTimestamp('task2-module'); });
  test.done();

};
