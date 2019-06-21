const Graph = require('./Graph');

const g = new Graph(6, 8, [
  [0, 5],
  [2, 4],
  [2, 3],
  [1, 2],
  [0, 1],
  [3, 4],
  [3, 5],
  [0, 2],
]);

it('test Graph.V', () => {
  expect(g.V()).toBe(6);
});
it('test Graph.E', () => {
  expect(g.E()).toBe(8);
});
it('test Graph.adj', () => {
  expect(g.adj(0)).toEqual([2, 1, 5]);
});
