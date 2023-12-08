import PriorityQueue from "./PriorityQueue";

class WeightedGraph {
  adjacencyList: { [key: string]: { node: string; weight: number }[] };
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

  Dijkstra = (v1: string, v2: string) => {
    let nodes = new PriorityQueue();
    const distances: any = {};
    const prev: any = {};
    let smallest: any;
    let path = [];

    for (let i in this.adjacencyList) {
      if (i === v1) {
        distances[i] = 0;
        nodes.enqueue(i, 0);
      } else {
        distances[i] = Infinity;
        nodes.enqueue(i, Infinity);
      }
      prev[i] = null;
    }

    while (nodes.values.length) {
      smallest = nodes.dequeue().value;

      if (smallest !== v2 && distances[smallest] != Infinity) {
        for (let i of this.adjacencyList[smallest]) {
          if (i.weight < distances[i.node]) {
            let newDistance = distances[smallest] + i.weight;
            if (newDistance < distances[i.node]) {
              distances[i.node] = newDistance;
              prev[i.node] = smallest;
              nodes.enqueue(i.node, i.weight);
            }
            console.log(distances);
          }
        }
      } else {
        let node = v2;
        // path.push(v2);
        while (prev[node]) {
          path.push(node);
          node = prev[node];
        }
        path.push(v1);
        console.log(distances, prev, "end", path.reverse());
        break;
      }
    }
  };
}

export default WeightedGraph;
