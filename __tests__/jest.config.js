/* eslint-disable */
const path = require('path');

module.exports = {
  rootDir: '../',
  roots: ['src'],
  transform: {
    '^.+\\.[jt]sx?$': `<rootDir>/__tests__/jest-preprocess.js`,
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    // A map from regular expressions to module names that allow to stub out resources with a single module
    'test-utils': '<rootDir>/jest_config/test-utils',
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__tests__/__mocks__/file.mock.js`,
    '@components': path.resolve('src/components'),
    '@assets': path.resolve('src/assets'),
    '@pages': path.resolve('src/pages'),
    '@config': path.resolve('src/config'),
    '@types': path.resolve('src/types'),
    '@theme': path.resolve('src/theme'),
    '@utils': path.resolve('src/utils'),
    gatsby: '<rootDir>/__tests__/__mocks__/gatsby',
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `\\.cache`,
    path.resolve('<rootDir>', '.*/public'),
  ],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/__tests__/loadershim.js`],
};
