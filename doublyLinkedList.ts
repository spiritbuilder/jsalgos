interface Node {
  val: any;
  next: any;
  prev: any;
}

class Node {
  val: any;
  next: any;
  prev: any;

  constructor(val: any) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  length: number = 0;
  head: Node | null;
  tail: Node | null;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  push(val: any) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;
      return this;
    }
  }
  pop() {
    if (this.length < 1) {
      return undefined;
    }
    if (this.length == 1) {
      let temp = this.head;
      this.length = 0;
      this.head = null;
      this.tail = null;
      return temp
    }
    let current = this.head;
    while (current && current.next) {
      if (current.next.next) {
        current = current.next;
      } else {
        let newTail = current;
        let temp = current.next
        current.next = null;
        this.tail = newTail;
        this.length--;
        return temp
      }
    }
  }
}

export default DoublyLinkedList;
