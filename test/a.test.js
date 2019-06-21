const a = require('./a');

jest.mock('./b', () => {
  return () => {
    return 'love';
  };
});

it('test mock fs.readFileSync', () => {
  expect(a()).toBe('lovezcs');
});
