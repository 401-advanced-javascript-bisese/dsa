'use strict';

const Queue = require('../queue');

describe('queue', () => {
  it('can peek like a freek', () => {
    let queue = new Queue();
    queue.enqueue(1);
    console.log(queue.isEmpty(), queue.length);
    expect(queue.peek()).toBe(1);
  });
});

describe('queue', () => {
  it('can enqueue like a proper englishman', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.toArray()).toEqual([3,2,1]);
    expect(queue.tail.value).toBe(1);
  });
});

describe('queue', () => {
  it('can dequeue when the time is right', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    expect(queue.toArray()).toEqual([3,2]);
  });
});
