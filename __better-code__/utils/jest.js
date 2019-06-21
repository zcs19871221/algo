'use strict';

require('core-js/modules/es.array.iterator');

// eslint-disable-next-line import/no-extraneous-dependencies
const jest = require('jest');

module.exports = ({ src = [], options = ['--watch'] } = {}) => {
  if (!Array.isArray(options)) {
    throw new Error('jest参数错误');
  } // jest babel使用jest browserslist配置

  process.env.NODE_ENV = 'jest';
  jest.run([...options, ...src]);
};
