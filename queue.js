'use strict';

class Queue {
  constructor() {
    this.queue = [];
    this.length = 0;
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

  enqueue(value) {
    let nudeNode = {
      value: value,
      next: null,
      previous: null,
    };
    this.length++;
    if (!this.head) {
      this.head = nudeNode;
      this.tail = nudeNode;
      return;
    }
    this.head.previous = nudeNode;
    nudeNode.next = this.head;
    this.head = nudeNode;
  }

  dequeue() {
    if (!this.tail) {
      return;
    }
    this.tail = this.tail.previous;
    this.tail.next = null;
  }

  isEmpty() {
    return !!this.queue.length;
  }

  peek() {
    if (this.isEmpty()) return 'dis empy...';
    return this.head.value;
  }
}

module.exports = Queue;
