var fs = require('fs');

module.exports = {

  getTimestamp: function(filename) {
    return fs.statSync('./task-3.js').mtime;
  }

};
