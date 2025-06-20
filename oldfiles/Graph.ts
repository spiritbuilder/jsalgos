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


type WeightedNode = { node: string; weight: number };
class WeightedGraph {
  graph: Record<string, WeightedNode[]> = {};

  addVertice(node: string) {
    this.graph[node] = [];
  }

  addEdge(v1: string, v2: string, weight: number) {
    if (
      this.graph[v1] &&
      this.graph[v2] &&
      !this.graph[v1].find((m) => m.node == v2) &&
      !this.graph[v2].find((m) => m.node == v1) &&
      v1 !== v2
    ) {
      this.graph[v1].push({ node: v2, weight });
      this.graph[v2].push({ node: v1, weight });
      return this.graph;
    }
    return this.graph;
  }

  findShortestPath(start: string, end: string) {
    if (start == end) {
      return 0;
    }

    if (!this.graph[start] || !this.graph[end]) {
      throw new Error("one  of  the nodes not  found");
    }

    let distances: Record<string, number> = {};
    let prevs: Record<string, string | null> = { [start]: null };

    let queue: WeightedNode[] = [...this.graph[start]];
    const sort = () => {
      queue.sort((a, b) => a.weight - b.weight);
    };

    for (let i in this.graph) {
      if (i == start) {
        distances[i] = 0;
        prevs[i] = null;
        queue.push({ node: i, weight: 0 });
      }

      sort();
    }

    while (queue.length) {
      let min = queue.shift() as WeightedNode;

      if (min.node !== end && distances[min.node] >= 0) {
        for (let nei of this.graph[min.node]) {
          let newDistance = nei.weight + distances[min.node];

          if (
            !distances[nei.node] ||
            (distances[nei.node] && newDistance < distances[nei.node])
          ) {
            distances[nei.node] = newDistance;
            if (nei.node !== start) {
              prevs[nei.node] = min.node;
            }
            queue.push(nei);
          }
          sort();
        }
      }

      console.log(prevs, distances);
    }

    let paths = [];
    let node = end;
    while (node) {
      paths.push(node);
      node = prevs[node] as string;
    }
    console.log({
      path: paths.reverse().join("->"),
      distance: distances[end] || Infinity,
    });
    // console.log(prevs, distances);

    // initiallise distances
    //  initialise  visited
    // keep prev to know which is better

    // pick the neighbours of the beginnning node

    // store their distances and set beginning as their prev

    // set push all neighbours to a priority queue

    // pick each one  - check if visited, if not visited -
  }
}

let gr = new WeightedGraph();
for (let i = 0; i < 9; i++) {
  gr.addVertice(i.toString());
}

[
  ["8", "0", 4],
  ["0", "1", 3],
  ["8", "4", 8],
  ["3", "4", 1],
  ["3", "2", 6],
  ["2", "5", 1],
  ["7", "1", 4],
  ["2", "7", 2],
  ["0", "3", 2],
  ["5", "6", 8],
].map((m) => gr.addEdge(m[0] as string, m[1] as string, m[2] as number));

gr.addVertice("K");
gr.addVertice("P");
gr.addEdge("K", "P", 2);

// gr.findShortestPath("8", "7");

// gr.addVertice()

