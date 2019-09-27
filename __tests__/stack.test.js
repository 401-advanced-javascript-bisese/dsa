const stack = require("../stack");

describe(`stack`, () => {
  it("can push and pop like a good girl", () => {
    expect(stack([], 8)).toBe(-1);
  });
  it("returns valid index when array contains the key we lookin fo", () => {
    expect(stack([8], 8)).toBe(0);
    expect(stack([8], 9)).toBe(-1);
    expect(stack([8, 9], 9)).toBe(1);
    expect(stack([8, 9], 10)).toBe(-1);
    expect(stack([8, 9, 10], 11)).toBe(-1);
    expect(stack([8, 9, 10], 9)).toBe(1);
    expect(stack([8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 9)).toBe(1);
    expect(stack([8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 18)).toBe(-1);
  });
});
