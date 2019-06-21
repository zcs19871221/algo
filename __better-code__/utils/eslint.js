'use strict';

require('core-js/modules/es.array.iterator');

const exec = require('./exec');

module.exports = ({
  options = [],
  src = ['.'],
  ext = ['.js', '.jsx'],
} = {}) => {
  if (!Array.isArray(options) || !Array.isArray(src) || !Array.isArray(ext)) {
    throw new Error('eslint参数错误');
  }

  const eslintFile = [
    `${src.length === 1 ? src : `{${src.join(',')}}`}/**/*{${ext.join(',')}}`,
  ];
  return exec({
    command: 'node',
    args: ['./node_modules/eslint/bin/eslint.js', ...options, ...eslintFile],
    name: 'eslint',
    opts: {
      stdio: 'inherit',
    },
  });
};
