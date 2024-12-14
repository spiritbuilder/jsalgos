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
      if (
        this.adjencyList[vertex1] &&
        !this.adjencyList[vertex1].includes(vertex2)
      )
        this.adjencyList[vertex1].push(vertex2);
      if (
        this.adjencyList[vertex1] &&
        !this.adjencyList[vertex2].includes(vertex1)
      )
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
    return this.adjencyList;
  }

  dfs(x: any) {
    let list: { [key: string]: boolean } = {};
    let result: any[] = [];

    const _dfs = (x: any) => {
      if (list[x]) return;

      list[x] = true;
      result.push(x);
      for (let i of this.adjencyList[x]) {
        _dfs(i);
      }
    };
    _dfs(x);
    console.log(result);
  }
  dfs_it(x: any) {
    let list: any[] = [];
    let stack: any[] = [x];
    let visited: any = {};
    while (stack.length !== 0) {
      let vertex = stack.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        list.push(vertex);
        this.adjencyList[vertex].forEach((element: any, item: number) => {
          if (!visited[element]) {
            stack.push(element);
          }
        });
      }
    }
    console.log(visited);
    console.log(list);
  }

  bfs(start: any) {
    let list = [];

    let queue = [start];
    let visited: any = {};
    while (queue.length != 0) {
     // console.log(queue);
      let vertex = queue.shift();
      
      if (!visited[vertex]) {
        list.push(vertex);
        visited[vertex] = true;
        this.adjencyList[vertex].forEach((m: any, i: number) => {
          queue.push(m);
        });
      }
    }
    console.log(list, "\n");
  }
}

export default Graph;
