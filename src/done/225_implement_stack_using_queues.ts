/**
 * https://leetcode.com/problems/implement-stack-using-queues/
 *
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

class MyStack {
  arr: number[] = [];

  /**
   * Push element x onto stack.
   * @param {number} x
   * @return {void}
   */
  push(x: number): void {
    this.arr.push(x);
  }

  /**
   * Removes the element on top of the stack and returns that element.
   * @return {number}
   */
  pop(): number | undefined {
    return this.arr.pop();
  }

  /**
   * Get the top element.
   * @return {number}
   */
  top(): number {
    return this.arr[this.arr.length - 1];
  }

  /**
   * Returns whether the stack is empty.
   * @return {boolean}
   */
  empty(): boolean {
    return this.arr.length === 0 ? true : false;
  }

  /**
   * for test
   */
  getAsArray(): number[] {
    return this.arr;
  }
}

describe("implement stack using queues", () => {
  test("#1", () => {
    const myStack = new MyStack();
    expect(myStack.getAsArray()).toEqual([]);

    myStack.push(1);
    expect(myStack.getAsArray()).toEqual([1]);
    myStack.push(2);
    expect(myStack.getAsArray()).toEqual([1, 2]);
    expect(myStack.top()).toBe(2);
    expect(myStack.pop()).toBe(2);
    expect(myStack.empty()).toBe(false);
  });
});
