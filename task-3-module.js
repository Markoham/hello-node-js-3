var fs = require('fs');

module.exports = {

  getTimestamp: function(filename, callback) {

    fs.stat(filename,function (err, stats) {
      if(err) {
        return callback(err,null);
      }
      
      return callback(null,stats.mtime);
    });
  }
};
