var timestamp = require('./task-3-module');
var file = process.argv[2];


var formatDate = function(date) {
  var datestr =
    date.getDate() + "." +
    (date.getMonth() + 1) + "." +
    (date.getYear() + 1900);

  var timestr =
    date.getHours() +":" + date.getMinutes() + ":" +
    date.getSeconds();

    return datestr + " " + timestr;
};

timestamp.getTimestamp(file,function(err,time){
  if(err){
    console.log(err);
    return;
  }

  console.log(formatDate(time));

});
