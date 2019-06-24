class Paths {
  #visited = {};
  #toEdge = {};
  #s = null;
  constructor(g, s) {
    this.#Bfs(g, s);
    this.#s = s;
  }

  #Bfs(g, v) {
    const stack = [v];
    this.#visited[v] = true;
    while (stack.length) {
      const each = stack.shift();
      const adjs = g.adj(each);
      adjs.forEach(e => {
        if (this.#visited[e] === undefined) {
          this.#visited[e] = true;
          this.#toEdge[e] = each;
          stack.push(e);
        }
      });
    }
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
