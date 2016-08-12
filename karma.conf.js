// Karma configuration
module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // load angular first
      { pattern: 'bower_components/angular/angular.js', watched: false },
      // load angular mock for testing
      { pattern: 'bower_components/angular-mocks/angular-mocks.js', watched: false },
      // load all standardjs non-test resources first
      { pattern: 'standard-angular-examples/**/!(*spec).js', watched: true },
      // load all non-test resources first
      { pattern: 'angular-examples/**/!(*spec).js', watched: true },
      // then load the standardjs unit tests
      { pattern: 'standard-angular-examples/**/**.spec.js', watched: true },
      // then load the unit tests
      { pattern: 'angular-examples/**/**.spec.js', watched: true }
    ],

    // list of files to exclude
    exclude: [
      'standard-angular-examples/libs'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
