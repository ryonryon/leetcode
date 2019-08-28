/**
 * https://leetcode.com/problems/contains-duplicate/
 *
 * @param {number[]} nums
 * @return {boolean}
 */

function containsDuplicate(nums: number[]): boolean {
  let s: Set<number> = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (s.has(nums[i])) {
      return true;
    }
    s.add(nums[i]);
  }

  return false;
}

describe("contains duplicate", () => {
  test("#1", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toEqual(true);
  });
  test("#2", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toEqual(false);
  });
  test("#3", () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
  });
});
