interface Node {
  val: any;
  next: any;
  prev: any;
}

class Node implements Node {
  // val: any;
  // next: any;
  // prev: any;

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
      return temp;
    }
    // while (current && current.next) {
    //   if (current.next.next) {
    //     current = current.next;
    //   } else {
    //     let newTail = current;
    //     let temp = current.next
    //     current.next = null;
    //     this.tail = newTail;
    //     this.length--;
    //     return temp
    //   }
    // }
    if (this.tail && this.length > 1) {
      let temp = this.tail;
      let last = this.tail.prev;
      last.next = null;
      this.tail = last;
      this.length--;
      return temp;
    }
  }
  shift() {
    if (this.length < 1) {
      return undefined;
    }
    if (this.length === 1) {
      let temp = this.head;
      this.length = 0;
      this.head = null;
      this.tail = null;
      return temp;
    }

    if (this.head) {
      let oldhead = this.head;
      let temp = this.head.next;
      temp.prev = null;
      this.head = temp;
      this.length--;
      return oldhead;
    }
  }

  unshift(val: any) {
    if (this.length < 1) {
      return this.push(val);
    }
    let newNode = new Node(val);
    let temp = this.head;
    this.head = newNode;
    newNode.next = temp;
    this.length++;
    return this;
  }
  get(index: number = 0) {
    if (index > this.length - 1 || index < 0) {
      return undefined;
    }
    if (index < this.length / 2) {
      let current = this.head;
      for (let i = 0; i <= index; i++) {
        if (i === index) {
          return current;
        }
        current = current?.next;
      }
    } else {
      let current = this.tail;
      for (let i = this.length - 1; i >= index; i--) {
        if (i === index) {
          return current;
        }
        current = current?.prev;
      }
    }
  }

  set(index: number, val: any) {
    let current = this.get(index);
    if (current) {
      current.val = val;
      return current;
    }
  }

  insert(index: number, val: any) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length) {
      return this.push(val);
    }
    if (index === 0) {
      return this.unshift(val);
    }
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let next = prev?.next;
    if (prev && next) {
      newNode.prev = prev;
      newNode.next = next;
      next.prev = newNode;
      prev.next = newNode;
    }
    this.length++;
    return newNode;
  }

  remove(index: number) {
    if (index > this.length - 1) {
      return undefined;
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    if (index === 0) {
      return this.shift();
    }

    let prev = this.get(index - 1);
    let next = prev?.next.next;
    let temp = prev?.next;
    if (prev && next) {
      prev.next = next;
      next.prev = prev;
      this.length--;
      return temp;
    }
  }
}

export default DoublyLinkedList;
