const Stack = require('../stack');

describe(`stack`, () => {
  it('can push like a Columbian', () => {
    let stack = new Stack();
    stack.push(6);
    expect(stack.head.value).toBe(6);
    stack.push(9);
    expect(stack.head.value).toBe(9);
    expect(stack.head.next.value).toBe(6);
  });

  it('can push it to the limit', () => {
    let stack = new Stack();
    stack.push(9);
    expect(stack.head.value).toBe(9);
    stack.push(0);
    expect(stack.head.value).toBe(0);
    stack.push(2);
    expect(stack.head.value).toBe(2);
    stack.push(1);
    expect(stack.head.value).toBe(1);
    stack.push(0);
    expect(stack.head.value).toBe(0);
  });

  it('can pop it like a baaaad gurl', () => {
    let stack = new Stack();
    stack.push(8);
    expect(stack.head.value).toBe(8);
    stack.pop();
    expect(stack.head).toBe(null);
  });

  it('can peek like a creepy grandpa', () => {
    let stack = new Stack();
    stack.push(9);
    stack.push(1);
    stack.push(1);
    expect(stack.peek()).toBe(1);
  });
});
