var fs = require('fs');

module.exports = {

  getTimestamp: function(filename) {
    return fs.statSync(filename).mtime;
  }
};
