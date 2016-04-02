// Karma configuration
// Generated on Sat Apr 02 2016 12:46:56 GMT-0500 (CDT)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'js/angular.js',
      'tests/angular-mocks.js',
      'js/app/**/*.js',
      'tests/*.spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
}
