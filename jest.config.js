/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',

  // A map from regular expressions to module names that allow to stub out
  // resources with a single module
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy'
  },

  // An array of glob patterns indicating a set of files for which coverage
  // information should be collected
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!**/node_modules/**'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An object that configures minimum threshold enforcement
  // for coverage results
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },

  // Setup file location
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],

  // A list of reporter names that Jest uses when writing coverage reports.
  // Any istanbul reporter can be used.
  coverageReporters: ['text-summary', 'lcov'],

  // An array of directory names to be searched recursively up from the
  // requiring module's location
  moduleDirectories: ['node_modules'],

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],

  // An alternative API to setting the NODE_PATH env variable, modulePaths is an array of absolute paths to additional locations to search when resolving modules.
  modulePaths: ['./src', './', 'node_modules'],

  // Setting this value to fake allows the use of fake timers for functions such as setTimeout.
  // Fake timers are useful when a piece of code sets a long timeout that we don't want to wait for in a test.
  timers: 'fake',

  // The pattern Jest uses to detect test files. By default it looks for .js, .jsx
  // files inside of __tests__ folders, as well as any files with a suffix of .test or -test
  testRegex: 'src/.*/__tests__/(.*)?(\\.|-)test\\.(js|ts|tsx)$',

  // Indicates whether each individual test should be reported during the run
  verbose: true,

  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  }
};
