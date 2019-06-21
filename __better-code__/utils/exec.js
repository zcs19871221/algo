"use strict";

require("core-js/modules/es.promise");

// eslint-disable-next-line import/no-extraneous-dependencies
const spawn = require('cross-spawn');

const _require = require('./logger'),
      success = _require.success,
      error = _require.error,
      info = _require.info;

const exec = ({
  command = 'npm',
  args = [],
  name = command,
  opts = {
    stdio: 'inherit',
    shell: true
  },
  onData = msg => info(String(msg)),
  onError = execErr => error(String(execErr)),
  onClose = () => {}
} = {}) => {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, opts);

    if (child.stdout) {
      child.stdout.on('data', onData);
    }

    if (child.stderr) {
      child.stderr.on('data', onError);
    }

    child.on('close', code => {
      onClose(code);

      if (code === 0) {
        success(`执行 ${name} 成功`);
        resolve();
      } else {
        reject(new Error(`执行 ${name} 失败`));
      }
    });
  });
};

module.exports = exec;