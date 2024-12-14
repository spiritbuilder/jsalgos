import BinaryHeap from "./BinaryHeap";

class Node {
  value: any;
  priority: any;
  constructor(val: any, priority: number) {
    this.value = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  values: any[];
  constructor() {
    this.values = [];
  }
  bubbleUp() {
    let currentPosition = this.values.length - 1;
    while (currentPosition > 0) {
      let current = this.values[currentPosition];
      let parentPosition = Math.floor((currentPosition - 1) / 2);
      let parent = this.values[parentPosition];
      if (this.values[parentPosition].priority > current.priority) {
        this.values[parentPosition] = current;
        this.values[currentPosition] = parent;
        currentPosition = parentPosition;
      } else {
        break;
      }
    }
  }
  enqueue(val: any, priority: any) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    if (this.values.length > 1) {
      this.bubbleUp();
    }
    console.log(this.values);
  }

  bubbleDown() {
    this.values.unshift(this.values.pop());
    // console.log(this.values, "at buuble");
    let currentPosition = 0;
    while (currentPosition < this.values.length - 1) {
      let current = this.values[currentPosition];
      let leftChildPosition = 2 * currentPosition + 1;
      let rightChildPosition = 2 * currentPosition + 2;
      let leftChild = this.values[leftChildPosition];
      let rightChild = this.values[rightChildPosition];

      if (
        rightChild &&
        rightChild.priority < current.priority &&
        rightChild.priority <= leftChild.priority
      ) {
        this.values[rightChildPosition] = current;
        this.values[currentPosition] = rightChild;
        currentPosition = rightChildPosition;
        console.log("swap", current, " with", rightChild);
      } else if (
        leftChild &&
        leftChild.priority < current.priority &&
        (!rightChild || leftChild.priority <= rightChild.priority)
      ) {
        this.values[leftChildPosition] = current;
        this.values[currentPosition] = leftChild;
        currentPosition = leftChildPosition;
        console.log("swap", current, " with", leftChild);
      } else {
        console.log(current, leftChild, rightChild);
        break;
      }
    }
  }

  dequeue() {
    if (this.values.length <= 0) {
      return undefined;
    }
    let min = this.values.shift();

    if (this.values.length > 1) {
      this.bubbleDown();
    }
    console.log(this.values, "at end");
    return min;
  }
}

export default PriorityQueue;
