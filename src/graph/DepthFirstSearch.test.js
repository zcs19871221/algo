const DepthFirstSearch = require('./DepthFirstSearch');
const Graph = require('./Graph');

describe('dfs', () => {
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
  const dfs = new DepthFirstSearch(g);

  it('marked', () => {
    expect(dfs.marked(4)).toBe(true);
  });

  it('count', () => {
    expect(dfs.count()).toBe(6);
  });
});
