/* eslint-disable */
const path = require('path');

module.exports = {
  rootDir: '../',
  transform: {
    '^.+\\.[jt]sx?$': `<rootDir>/jest_config/jest-preprocess.js`,
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    // A map from regular expressions to module names that allow to stub out resources with a single module
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/jest_config/__mocks__/file.mock.js`,
    '@components': path.resolve('src/components'),
    '@assets': path.resolve('src/assets'),
    '@pages': path.resolve('src/pages'),
    '@config': path.resolve('src/config'),
    '@types': path.resolve('src/types'),
    '@theme': path.resolve('src/theme'),
    '@utils': path.resolve('src/utils'),
    '@hooks': path.resolve('src/hooks'),
    '@services': path.resolve('src/services'),
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `\\.cache`,
    '<rootDir>/__tests__',
    path.resolve('<rootDir>', '.*/public'),
  ],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [
    `<rootDir>/jest_config/loadershim.js`,
    `<rootDir>/jest_config/jestSetup.js`,
  ],
};
