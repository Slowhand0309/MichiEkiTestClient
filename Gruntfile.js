module.exports = function(grunt) {

  // Load npm tasks.
  grunt.loadNpmTasks('phonegap-grunt');

  // Configuration.
  grunt.initConfig({

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
};
