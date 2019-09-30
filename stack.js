class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    let nudeNode = {
      //nudeNode is really newNode, ya node what i mean?
      value: value,
      next: null,
    };
    this.length++;
    if (!this.head) {
      this.head = nudeNode;
      return;
    }
    nudeNode.next = this.head;
    this.head = nudeNode;
  }

  toArray() {
    let res = [];
    let cur = this.head;

    while (cur.next != null) {
      res.push(cur.value);
      cur = cur.next;
    }
    res.push(cur.value);
    return res;
  }

  pop() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  peek() {
    if (this.isEmpty()) return 'ain\'t nothin here!';
    return this.head.value;
  }

  isEmpty() {
    return !this.length;
  }
}

module.exports = Stack;
