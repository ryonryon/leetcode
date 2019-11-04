/**
 * @param {number[]} nums
 * @return {number}
 */

function rob(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  const dp = Array.from(new Array(nums.length).fill(0));
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = dp[i - 2] + nums[i] < dp[i - 1] ? dp[i - 1] : dp[i - 2] + nums[i];
  }

  return dp[dp.length - 1];
}

describe("rob", () => {
  test("#1", () => {
    expect(rob([1, 2, 3, 1])).toBe(4);
  });
  test("#2", () => {
    expect(rob([2, 7, 9, 3, 1])).toBe(12);
  });
});
