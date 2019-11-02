/**
 * https://leetcode.com/problems/move-zeroes/
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function moveZeroes(nums: number[]): void {
  for (let i = nums.length - 1; 0 <= i; i--) {
    if (nums[i] === 0) {
      for (let j = i; j < nums.length; j++) {
        nums[j] = nums[j + 1];
      }
      nums[nums.length - 1] = 0;
    }
  }
}

describe("move zeroes", () => {
  test("#1", () => {
    const arr = [0, 1, 0, 3, 12];
    moveZeroes(arr);
    expect(arr).toEqual([1, 3, 12, 0, 0]);
  });
});
