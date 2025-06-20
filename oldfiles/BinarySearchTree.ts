export interface NodeProps {
  value?: any;
  left?: any;
  right?: any;
}

class Node implements NodeProps {
  value = null;
  left = null;
  right = null;

  constructor(val: any) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: null | NodeProps | any;
  constructor() {
    this.root = null;
  }

  insert(val: any) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      console.log(this);
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (current.value === val) {
          console.log("deadlock");
          return undefined;
        }
        if (current.value > val) {
          if (!current.left) {
            current.left = newNode;
          } else {
            current = current.left;
          }
        } else {
          if (current.value < val) {
            if (!current.right) {
              current.right = newNode;
            } else {
              current = current.right;
            }
          }
        }
      }
    }
  }
  find(val: any, node = this.root): any {
    if (!node || (!node.left && !node.right && node.value !== val)) {
      console.log("not found");
      return undefined;
    }
    if (val === node.value) {
      console.log(val, "Node s", node.value);
      console.log("found");
      return true;
    }
    if (val > node.value) {
      return this.find(val, node.right);
    } else {
      let bst = this;
      return this.find(val, node.left);
    }
  }

  traverseBFS() {
    if (!this.root) {
      return [];
    }
    let queue: any[] = [this.root];
    let visited: any[] = [];

    while (queue.length > 0) {
      let currentNode = queue[0];
      console.log(currentNode);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      visited.push(currentNode.value);
      queue.shift();
    }

    console.log(visited);
    return visited;
  }

  traverseDFSPreOrder() {
    let visited: any[] = [];
    const traverse: any = (node: any) => {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    console.log(visited);
    return visited;
  }

  traverseDFSPostOrder() {
    let visited: any[] = [];
    const traverse: any = (node: any) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    };
    traverse(this.root);
    console.log(visited);
    return visited;
  }
  traverseDFSInOrder() {
    let visited: any[] = [];
    const traverse: any = (node: any) => {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
      
    };
    traverse(this.root);
    console.log(visited);
    return visited;
  }
}

export default BinarySearchTree;
