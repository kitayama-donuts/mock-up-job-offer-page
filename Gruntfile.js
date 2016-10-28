module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    bower: {
      install: {
        options: {
          layout: 'byComponent',
          cleanTargetDir: true,
          targetDir: 'static/bower',
          install: true,
          verbose: false,
          cleanBowerDir: false
        }
      }
    },
  });
  grunt.loadNpmTasks('grunt-bower-task');
};
