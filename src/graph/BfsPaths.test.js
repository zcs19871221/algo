const Paths = require('./BfsPaths');
const Graph = require('./Graph');

describe('Paths Graph', () => {
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
  const paths = new Paths(g, 0);

  it('hasPathto', () => {
    expect(paths.hasPathTo(4)).toBe(true);
  });
  it('pathTo', () => {
    expect(paths.pathTo(3)).toEqual([3, 2]);
  });
});
