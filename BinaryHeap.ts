class BinaryHeap {
  values: any[];
  constructor() {
    this.values = [];
  }

  insert(val: any) {
    this.values.push(val);
    if (this.values.length > 1) {
      let position = this.values.length - 1;
      while (position > 0) {
        let parentPosition = Math.floor((position - 1) / 2);
        let parent = this.values[parentPosition];
        if (val > parent) {
          this.values[parentPosition] = val;
          this.values[position] = parent;
          position = parentPosition;
        } else {
          break;
        }
      }
    }
  }
  bubbleDown() {
    this.values.unshift(this.values.pop());
    let position = 0;
    while (position < this.values.length - 1) {
      let current = this.values[position];
      let leftChildPosition = 2 * position + 1;
      let rightChildPosition = 2 * position + 2;
      let leftChild = this.values[leftChildPosition];
      let rightChild = this.values[rightChildPosition];
      if (rightChild && rightChild > leftChild && current < rightChild) {
        this.values[position] = rightChild;
        this.values[rightChildPosition] = current;
        position = rightChildPosition;
      } else if (leftChild && leftChild > rightChild && current < leftChild) {
        this.values[position] = leftChild;
        this.values[leftChildPosition] = current;
        position = leftChildPosition;
      } else {
        break;
      }
    }
  }
  extractMax() {
    if (this.values.length === 0) return undefined;
    let max = this.values.shift();
    if (this.values.length > 1) {
      this.bubbleDown();
    }
    return max;
  }
}

export default BinaryHeap;
