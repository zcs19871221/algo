const Uf = require('./Uf');

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
it('uf', () => {
  const uf = new Uf(10, paths);
  expect(uf.connected(5, 9)).toBe(false);
});
it('uf 2', () => {
  const uf = new Uf(10, paths);
  expect(uf.connected(4, 9)).toBe(true);
});
