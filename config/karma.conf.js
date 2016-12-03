module.exports = (config) => {
  config.set({
    browsers: ['PhantomJS'],
    colors: true,
    exclude: [
      '**/*/index.ts'
    ],
    files: [

      { pattern: 'src/**/*.ts' },      
      { pattern: 'test/**/*.spec.ts' }
    ],
    frameworks: [
      'mocha',
      'karma-typescript',
      'chai'
    ],
    karmaTypescriptConfig: {
      tsconfig: './tsconfig.json',
      reports: {
        html: 'coverage',
        json: 'coverage'
      }
    },
    logLevel: config.LOG_INFO,
    port: 9876,
    preprocessors: {
      '**/*.ts': ['karma-typescript']
    },
    reporters: [
      'mocha',
      'karma-typescript'
    ],
    singleRun: true
  });
};
