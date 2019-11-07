/**
 * https://leetcode.com/problems/range-sum-query-immutable/
 *
 * @param {number[]} nums
 * @param {number} i
 * @param {number} j
 * @return {number}
 *
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

class NumArray {
  nums: number[];

  constructor(nums: number[]) {
    this.nums = nums;
  }

  sumRange(i: number, j: number): number {
    let x = 0;
    for (let k = i; k <= j; k++) x += this.nums[k];
    return x;
  }
}

describe("NumArray", () => {
  const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
  test("#1", () => {
    expect(numArray.sumRange(0, 2)).toBe(1);
  });
  test("#2", () => {
    expect(numArray.sumRange(2, 5)).toBe(-1);
  });
  test("#3", () => {
    expect(numArray.sumRange(0, 5)).toBe(-3);
  });
});
