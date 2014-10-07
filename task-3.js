var timestamp = require('./task-3-module');
var moment = require('moment');
var file = process.argv[2];
moment.locale('fi');

var formatDate = function(date) {
    return moment().format('L HH:mm:ss');
};

timestamp.getTimestamp(file,function(err,time){
  if(err){
    console.log(err);
    return;
  }

  console.log(formatDate(time));

});
