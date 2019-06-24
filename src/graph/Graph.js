class Graph {
  #V = 0;
  #E = 0;
  #adj = [];

  constructor(v, e, vw) {
    v = Number(v);
    e = Number(e);
    if (
      !Number.isInteger(v) ||
      !Number.isInteger(e) ||
      !Array.isArray(vw) ||
      vw.length !== e
    ) {
      throw new Error('参数错误');
    }
    this.#V = v;
    this.#E = e;
    vw.forEach(([vv, ww]) => {
      this.addEdge(vv, ww);
    });
    this.map = {};
    this.edgeTo = {};
  }

  addEdge(v, w) {
    this.#adj[v] = this.#adj[v] || [];
    this.#adj[v].unshift(w);
    this.#adj[w] = this.#adj[w] || [];
    this.#adj[w].unshift(v);
  }

  V() {
    return this.#V;
  }

  E() {
    return this.#E;
  }

  adj(v) {
    return this.#adj[v];
  }

  toString() {
    console.log(`定点数:${this.#V} 边数:${this.#E}`);
    for (let i = 0; i < this.#V; i += 1) {
      console.log(`${i}: ${this.adj(i)}`);
    }
  }

  degree(v) {
    return this.adj(v).length;
  }
}
module.exports = Graph;
