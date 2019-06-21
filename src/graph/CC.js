class CC {
  #visted = [];
  #count = 0;
  #id = [];

  constructor(graph) {
    this.#id = new Array(graph.V());
    for (let i = 0; i < graph.V(); i++) {
      if (this.#visted[i] === undefined) {
        this.#dfs(graph, i);
        this.#count += 1;
      }
    }
  }

  #dfs(graph, v) {
    this.#visted[v] = true;
    this.#id[v] = this.#count;

    const adj = graph.adj(v);
    adj.forEach(node => {
      if (this.#visted[node] === undefined) {
        this.#dfs(graph, node);
      }
    });
  }

  connected(v, w) {
    return this.#id[v] === this.#id[w];
  }

  count() {
    return this.#count;
  }

  id(v) {
    return this.#id[v];
  }
}

module.exports = CC;
