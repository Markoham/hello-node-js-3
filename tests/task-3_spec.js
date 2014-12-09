var task3 = require('../task-3-module');
var moment = require('moment');
var fs = require('fs');
moment.locale('fi');

var formatDate = function(date) {
    return moment().format('L HH:mm:ss');
};

exports['getTimestamp'] = function (test) {
  test.equal(moment(formatDate(task3.getTimestamp('../task-3.js')),"DD.MM.YYYY HH:mm:ss").isValid(),true);
  test.equal(moment(task3.getTimestamp('./task3-module')).isValid(),true);
  //test.throws(function () { task3.getTimestamp('../task3-module'); });
  test.done();

};
