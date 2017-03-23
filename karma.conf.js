const args = process.argv;
args.splice(0, 4);

const polyfills = [];

const files = polyfills.concat(args);

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: files,
    preprocessors: {
      '**/*.spec.ts': ['webpack'],
      '**/*.spec.tsx': ['webpack']
    },
    webpack: {
      resolve: {
        extensions: ['.ts', '.js', '.tsx']
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: [
              {loader: 'ts-loader'}
            ]
          }
        ]
      },
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/addons': true,
        'react/lib/ReactContext': 'window'
      }
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Firefox'],
    singleRun: true,
    concurrency: Infinity
  })
};
