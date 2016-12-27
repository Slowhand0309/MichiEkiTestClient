'use strict';

module.exports = function(grunt) {

  // Load npm tasks.
  grunt.loadNpmTasks('phonegap-grunt');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Configuration.
  grunt.initConfig({

    jshint: {
         all: [
             'www/js/**/*.js'
         ],
         options: {
           jshintrc: '.jshintrc'
         }
     },
    // phonegap-grunt config.
    pg: {
      // Project create.
      init: {
        path: '.',
        id: 'ekibito.com',
        name: 'ekibito'
      },
      // Platform add android and ios.
      add: {
        platform: ['android', 'ios']
      },
      // Build android and ios platforms.
      build: {
        platform: ['android', 'ios']
      },
      // Run android platform.
      run: {
        platform: 'ios'
      },
      // Platform rm & platform add.
      clean: {
        platform: ['android', 'ios']
      }
    }
  });

  grunt.registerTask('default', ['jshint']);
};
