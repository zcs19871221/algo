#!/usr/bin/env node
'use strict';

require('core-js/modules/es.array.slice');

require('core-js/modules/es.promise');

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function() {
    var self = this,
      args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }
      _next(undefined);
    });
  };
}

const compile = require('../utils/babel');

const _require = require('../utils/logger'),
  error = _require.error;

const main =
  /*#__PURE__*/
  (function() {
    var _ref = _asyncToGenerator(function*() {
      try {
        yield compile(process.argv.slice(2));
      } catch (execErr) {
        error(execErr);
        process.exit(1);
      }
    });

    return function main() {
      return _ref.apply(this, arguments);
    };
  })();

main();
