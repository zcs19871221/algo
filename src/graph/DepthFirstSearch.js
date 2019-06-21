class DepthFirstSearch {
  #visited = {};
  #count = 0;
  constructor(graph) {
    this.#dfs(0, graph);
  }

  #dfs(v, g) {
    this.#visited[v] = true;
    this.#count += 1;
    g.adj(v).forEach(each => {
      if (this.#visited[each] === undefined) {
        this.#dfs(each, g);
      }
    });
  }

  marked(v) {
    return this.#visited[v];
  }

  count() {
    return this.#count - 1;
  }
}

module.exports = DepthFirstSearch;
