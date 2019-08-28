/**
 * https://leetcode.com/problems/missing-number/
 *
 * @param {number[]} nums
 * @return {number}
 */

function missingNumber(nums: number[]): number {
  let sumOfNumbers = 0;
  let rightSum = 0;
  for (let i = 0; i < nums.length; i++) {
    sumOfNumbers += nums[i];
    rightSum += i + 1;
  }

  return rightSum - sumOfNumbers;
}

describe("missing number", () => {
  test("#1", () => {
    expect(missingNumber([3, 0, 1])).toBe(2);
  });
  test("#2", () => {
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
  });
});
