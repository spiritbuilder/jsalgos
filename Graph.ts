class Graph {
  adjencyList: any;
  constructor() {
    this.adjencyList = {};
  }

  addVertex = (vertex: any) => {
    if (!this.adjencyList[vertex]) this.adjencyList[vertex] = [];
    return this.adjencyList;
  };

  addEdge = (vertex1: any, vertex2: string) => {
    if (vertex1 !== vertex2) {
      if (!this.adjencyList[vertex1].includes(vertex2))
        this.adjencyList[vertex1].push(vertex2);
      if (!this.adjencyList[vertex2].includes(vertex1))
        this.adjencyList[vertex2].push(vertex1);
    }
    return this.adjencyList;
  };
  removeEdge = (v1: any, v2: any) => {
    if (this.adjencyList[v1] && this.adjencyList[v2]) {
      this.adjencyList[v1] = this.adjencyList[v1].filter((m: any) => m !== v2);
      this.adjencyList[v2] = this.adjencyList[v2].filter((m: any) => m !== v1);
      return this.adjencyList;
    }
    return new Error("connection does not exist");
  };

  removeVertex(v: any) {
    if (this.adjencyList[v]) {
      let list = this.adjencyList[v];
      for (let i = 0; i < list.length; i++) {
        this.removeEdge(v, list[i]);
      }
      delete this.adjencyList[v];
    }
    return this.adjencyList
  }
}

export default Graph;
