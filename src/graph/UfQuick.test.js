const UfQuick = require('./UfQuick');

const paths = [
  [4, 3],
  [3, 8],
  [6, 5],
  [9, 4],
  [2, 1],
  [8, 9],
  [5, 0],
  [7, 2],
  [6, 1],
  [1, 0],
  [6, 7],
];
const uf = new UfQuick(10, paths);
it('uf', () => {
  expect(uf.connected(4, 9)).toBe(true);
});
it('uf 2', () => {
  expect(uf.connected(6, 1)).toBe(true);
});
