/**
 * https://leetcode.com/problems/remove-element/
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums: number[], val: number): number {
  let soFar: number = 0;

  while (soFar < nums.length) {
    if (nums[soFar] == val) {
      for (let i = soFar; i < nums.length - 1; i++) {
        nums[i] = nums[i + 1];
      }
      nums.pop();
      soFar--;
    }
    soFar++;
  }
  return nums.length;
}

describe("remove element", () => {
  test("#1", () => {
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
  });
});
