/* eslint-disable max-lines-per-function */
module.exports = api => {
  api.assertVersion('^7.4');
  api.cache.never();
  return {
    presets: [
      [
        '@babel/env',
        {
          modules: 'commonjs',
          useBuiltIns: 'usage',
          corejs: 3,
        },
      ],
    ],
    plugins: [
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: false,
        },
      ],
      [
        '@babel/plugin-proposal-private-methods',
        {
          loose: false,
        },
      ],
    ],
  };
};
