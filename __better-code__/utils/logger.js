"use strict";

// eslint-disable-next-line import/no-extraneous-dependencies
const chalk = require('chalk');

const success = msg => {
  const str = String(msg);
  console.log(chalk.green.bold(str));
};
/* eslint-disable no-param-reassign */


const error = codeErr => {
  if (codeErr && codeErr.stack) {
    codeErr.stack = chalk.red.bold(codeErr.stack);
  } else {
    codeErr = chalk.red.bold(codeErr);
  }

  console.error(codeErr);
};

const info = msg => {
  const str = String(msg);
  console.log(chalk.yellow(str));
};

module.exports = {
  error,
  success,
  info
};