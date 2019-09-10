/**
 * https://leetcode.com/problems/majority-element/
 *
 * @param {number[]} nums
 * @return {number}
 */

function majorityElement(nums: number[]): number {
  const memo = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (memo.has(nums[i])) {
      memo.set(nums[i], memo.get(nums[i])! + 1);
    } else {
      memo.set(nums[i], 1);
    }

    if (nums.length / 2 < memo.get(nums[i])!) {
      return nums[i];
    }
  }

  let majorityKey: number = 0;
  let majorityVal: number = 0;
  memo.forEach((key, val) => {
    if (majorityVal < val) {
      majorityVal = val;
      majorityKey = key;
    }
  });

  return majorityKey;
}

describe("Majority Element", () => {
  test("#1", () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
  });
  test("#2", () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });
  test("#3", () => {
    expect(majorityElement([2147483647])).toBe(2147483647);
  });
});
