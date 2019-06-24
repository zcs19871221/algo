class Paths {
  #visited = {};
  #toEdge = {};
  #s = null;
  constructor(g, s) {
    this.#dfs(g, s);
    this.#s = s;
  }

  #dfs(g, v) {
    this.#visited[v] = true;
    const adjs = g.adj(v);
    adjs.forEach(each => {
      if (this.#visited[each] === undefined) {
        this.#toEdge[each] = v;
        this.#dfs(g, each);
      }
    });
  }

  hasPathTo(v) {
    return this.#visited[v];
  }

  pathTo(v) {
    if (this.#visited[v]) {
      const paths = [];
      for (let node = v; node !== this.#s; node = this.#toEdge[node]) {
        paths.push(node);
      }
      return paths;
    }
  }
}
module.exports = Paths;
