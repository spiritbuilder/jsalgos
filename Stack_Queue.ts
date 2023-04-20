interface NodeProps {
  val: any | null | NodeProps;
  next: any | null | NodeProps;
}
class Node {
  val: any | null | NodeProps;
  next: any | null | NodeProps;
  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

// interface Props {
//   head:  NodeProps|null;
//   length: null | number;
//   tail: null | NodeProps;
// }

class Stack {
  head: NodeProps | null;
  length: number = 0;
  tail: null | NodeProps;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: any) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
      return newNode;
    } else {
      let current = this.head;
      newNode.next = current;
      this.head = newNode;
      this.length++;
    }
  }

  pop() {
    if (this.length == 0) return null;
    let temp = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return temp;
    }
    if (temp) {
      this.head = temp.next;
      this.length--;
      return temp;
    }
  }
}

class Queue {
  head: null | NodeProps;
  tail: null | NodeProps;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val: any) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
      console.log(this);
      return this;
    }

    if (this.tail) {
      let current = this.tail;
      //   newNode.next = current;
      current.next = newNode;
      this.tail = newNode;
      this.length++;
      console.log(this);
      return this;
    }
  }

  dequeue() {
    if (this.length === 0) {
      console.log(this);
      return null;
    }
    if (this.length === 1) {
      let temp = this.tail;
      this.head = null;
      this.tail = null;
      this.length = 0;
      console.log(this);
      return temp;
    }

    if (this.head) {
      let temp = this.head;
      this.head = temp.next;
      this.length--;
      console.log(this);
      return temp;
    }
  }
}

export { Stack, Queue };

//mongod --dbpath /Users/macbook/Desktop/work/dbs
