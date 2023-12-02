class WeightedGraph {
  adjacencyList: any;
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(x: any) {
    if (!this.adjacencyList[x]) {
      this.adjacencyList[x] = [];
    }
  }

  addEdge(v1: any, v2: any, weight: any) {
    if (v1 === v2) return;
    if (this.edgeExists(v1, v2)) return;
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
    return this.adjacencyList;
  }

  edgeExists(v1: any, v2: any) {
    let exists = false;
    this.adjacencyList[v1].forEach((m: any) => {
      if (m.node === v2) exists = true;
    });
    return exists;
    // if (exists) return exists;
    // this.adjacencyList[v2].forEach((m: any) => {
    //   if (m.node === v1) exists = true;
    // });
  }
}
