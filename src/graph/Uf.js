class Uf {
  #id = [];
  #count = 0;
  constructor(N, paths) {
    for (let i = 0; i < N; i++) {
      this.#id[i] = i;
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
    this.#id.forEach((e, index) => {
      if (e === pValue) {
        this.#id[index] = qValue;
      }
    });
    this.#count--;
  }

  find(p) {
    return this.#id[p];
  }

  connected(p, q) {
    return this.find(p) === this.find(q);
  }

  count() {}
}
module.exports = Uf;
