interface Mode {
  val: any;
  mext: any;
}

class Node {
  val: any;
  next: any;

  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  head: any;
  tail: any;
  length: number = 0;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val: any) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    // console.log(this);
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  //{val:a,next:{val:b,next:{val:c,next:null}}}
  pop() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;
      this.length = 0;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
      // console.log(current)
    }
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    console.log(this, "pop");
  }
  shift() {
    if (this.length <= 1) {
      this.head = null;
      this.tail = this.head;
      this.length = 0;
    }
    this.head = this.head.next;
    this.length--;
    console.log(this);
  }
  unshift(val: any) {
    if (this.length === 0) {
      this.push(val);
      console.log(this);
      return;
    }
    let newhead = this.head;
    this.head = { val, next: newhead };
    this.length++;
    // console.log(this);
  }
  get(index: number) {
    if (index + 1 > this.length || index < 0) {
      console.log(null);
      return null;
    }
    let i = 0;
    let x = this.head;
    while (i < index) {
      x = x.next;
      i++;
    }
    console.log(x, "see i val at index ", index);
    return x;
  }
  set(index: number, val: string | number) {
    if (index + 1 > this.length || this.length <= 0) {
      return null;
    }
    let current = this.head;
    let next = current;
    let i = 0;
    while (i < index) {
      current = current.next;
      i++;
    }
    current.val = val;
    // console.log(this)
    return val;
  }

  insert(index: number, val: any) {
    if (index > this.length || index < 0) {
      return undefined;
    }
    if (index === this.length) {
      this.push(val);
    }
    if (index === 0) {
      this.unshift(val);
    }
    let i = 0;
    let current = this.head;
    let next = current.next;
    while (i <= index) {
      if (i === index - 1) {
        let newNode = new Node(val);
        newNode.next = next;
        current.next = newNode;
        this.length++;
        return newNode;
      }
      current = next;
      next = current.next;
      i++;
    }
  }

  remove(index: number = 0) {
    if (index < 0 || index > this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;

    this.length--;
    return removed;
  }

  reverse() {
    if (this.length === 0 || this.length === 1) {
      return this;
    }
    let newList = new LinkedList();
    let current = this.head;
    let i = 0;
    while (i < this.length) {
      newList.unshift(current.val);
      current = current.next;
      i++;
    }
    this.head = newList.head;
    this.tail = newList.tail;
    return this;
  }

  reverse2() {
    if (this.length === 0 || this.length === 1) {
      return this;
    }

    let newList = new LinkedList();

    let current = this.head;

    while (current) {
      newList.unshift(current.val);
      current = current.next;
    }
    this.head = newList.head;
    this.tail = newList.tail;

    return this;
  }
}

export default LinkedList;

/*** Implementation */

// let linkedList = new LinkedList();

// linkedList.push("mike");
// linkedList.push("Sola");
// linkedList.shift();
// linkedList.unshift("Mjx");
// linkedList.push("Bosola");
// linkedList.traverse();
// linkedList.unshift("Manda");
// console.log("======");
// linkedList.set(3, "sleep");
// linkedList.traverse();
// console.log("======");
// linkedList.remove(2);
// linkedList.traverse();
// console.log("======");
// linkedList.insert(2, "Insert");
// console.log("======");
// linkedList.traverse();
// console.log("======");
// console.log("About to reverse")
// linkedList.reverse()
// console.log("======");
// linkedList.traverse();
// linkedList.pop()
// linkedList.traverse();
