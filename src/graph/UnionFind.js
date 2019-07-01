class Uf {
  #id = [];
  #count = 0;
  #sz = [];
  constructor(N, paths) {
    for (let i = 0; i < N; i++) {
      this.#id[i] = i;
      this.#sz[i] = 1;
    }
    this.#count = N;
    paths.forEach(([v, w]) => {
      this.union(v, w);
    });
  }

  union(p, q) {
    const pValue = this.find(p);
    const qValue = this.find(q);
    if (pValue === qValue) {
      return;
    }
    if (this.#sz[pValue] > this.#sz[qValue]) {
      this.#id[qValue] = pValue;
      this.#sz[pValue] += this.#sz[qValue];
    } else {
      this.#id[pValue] = qValue;
      this.#sz[qValue] += this.#sz[pValue];
    }
    this.#count--;
  }

  find(p) {
    while (this.#id[p] !== p) {
      p = this.#id[p];
    }
    return p;
  }

  connected(p, q) {
    return this.find(p) === this.find(q);
  }

  count() {
    return this.#count;
  }
}
module.exports = Uf;
