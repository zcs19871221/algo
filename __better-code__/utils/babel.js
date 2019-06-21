'use strict';

require('core-js/modules/es.array.iterator');

const exec = require('./exec');

module.exports = (command = ['.']) => {
  if (!Array.isArray(command)) {
    throw new Error('babel参数错误');
  }

  return exec({
    command: 'node',
    args: ['./node_modules/@babel/cli/bin/babel.js', ...command],
    name: 'babel',
    opts: {
      stdio: 'inherit',
    },
  });
};
