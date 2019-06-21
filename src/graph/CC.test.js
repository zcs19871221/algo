const CC = require('./CC');
const Graph = require('./Graph');

const g = new Graph(13, 13, [
  [0, 5],
  [4, 3],
  [0, 1],
  [9, 12],
  [6, 4],
  [5, 4],
  [0, 2],
  [11, 12],
  [9, 10],
  [0, 6],
  [7, 8],
  [9, 11],
  [5, 3],
]);
const cc = new CC(g);
it('test cc components', () => {
  const count = cc.count();
  const components = [];
  for (let i = 0; i < count; i++) {
    components[i] = [];
  }
  for (let i = 0; i < g.V(); i++) {
    components[cc.id(i)] = components[cc.id(i)] || [];
    components[cc.id(i)].unshift(i);
  }
  expect(components).toEqual([[6, 5, 4, 3, 2, 1, 0], [8, 7], [12, 11, 10, 9]]);
});
