const Paths = require('./Paths');
const Graph = require('./Graph');

describe('Paths Graph', () => {
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
  const paths = new Paths(g, 0);

  it('hasPathto', () => {
    expect(paths.hasPathTo(4)).toBe(true);
  });
  it('pathTo', () => {
    expect(paths.pathTo(3)).toEqual([3, 5, 4, 6]);
  });
});
