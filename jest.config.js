module.exports = {
  automock: false,
  clearMocks: false,
  resetMocks: false,
  restoreMocks: false,
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '<rootDir>/src/**/*.test.[jt]s?(x)',
    '<rootDir>/test/**/*.test.[jt]s?(x)',
  ],
  collectCoverageFrom: ['<rootDir>/src/**/*.[jt]s?(x)'],
  coverageDirectory: 'E:\\algo\\__better-code__\\jest\\coverage',
  coverageThreshold: {
    global: { brances: 50, functis: 50, lines: 50, statements: -10 },
  },
  errorOnDeprecated: true,
  testEnvironment: 'node',
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    '^.+\\.css$': 'E:\\algo\\__better-code__\\jest\\transform\\css.js',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)':
      'E:\\algo\\__better-code__\\jest\\transform\\file.js',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
};
