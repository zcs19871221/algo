/* 
  1. 连同表示一次递归可以访问到的所有节点，不连通就是在一次遍历后，通过循环发现有未访问的顶点                                                                             。
  2. 因此通过循环所有顶点中递归来生成id，当递归结束，count+1，所有相同count的id数组表示连同的顶点
*/
class CC {
  #id = [];
  #count = 0;
  #visited = {};
  constructor(g) {
    const v = g.V();
    let id = 0;
    for (let i = 0; i < v; i++) {
      if (this.#visited[i] === undefined) {
        this.#dfs(g, i);
        this.#count += 1;
      }
    }
  }

  #dfs(g, v) {
    if (this.#visited[v] === undefined) {
      this.#id[v] = this.#count;
      this.#visited[v] = true;
      g.adj(v).forEach(node => this.#dfs(g, node));
    }
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
