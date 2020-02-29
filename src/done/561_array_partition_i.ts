/**
 * https://leetcode.com/problems/array-partition-i/
 *
 * @param {number[]} nums
 * @return {number}
 */

function arrayPairSum(nums: number[]): number {
  let ans = 0;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i = i + 2) {
    const [a, b] = [nums[i], nums[i + 1]];
    ans += Math.min(a, b);
  }

  return ans;
}

describe('array partition i', () => {
  test('#1', () => {
    expect(arrayPairSum([1, 1, 2, 2])).toBe(3);
  });
});
