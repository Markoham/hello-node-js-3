/* Run external Gruntfile as
* grunt --gruntfile grunt-comparison.js
/*
module.exports = function(grunt) {
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.initConfig({
  jshint: {
    all: ['Gruntfile.js', './*.js']
  }
});

grunt.registerTask('default', ['jshint']);
};
