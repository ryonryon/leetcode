/**
 * https://leetcode.com/problems/min-stack/
 *
 * initialize your data structure here.
 */
class MinStack {
  constructor() {
    this.arr = [];
  }

  private arr: number[];

  push(x: number): void {
    this.arr.push(x);
  }

  pop(): void {
    this.arr.pop();
  }

  top(): number | undefined {
    return this.arr[this.arr.length - 1];
  }

  getMin(): number {
    let minNum: number = this.arr[0];
    for (let i = 1; i < this.arr.length; i++) {
      if (this.arr[i] < minNum) {
        minNum = this.arr[i];
      }
    }
    return minNum;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

describe("Min Stack", () => {
  test("#1", () => {
    const minStack: MinStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    expect(minStack.getMin()).toBe(-3); //   --> Returns -3.
    minStack.pop();
    expect(minStack.top()).toBe(0); //      --> Returns 0.
    expect(minStack.getMin()).toBe(-2); //   --> Returns -2.
  });
});
