/**
 * https://leetcode.com/problems/longest-increasing-subsequence/
 * 
 * @param {number[]} nums
 * @return {number}
 */

function lengthOfLIS(nums: number[]): number {
    let len = 0;
    const dp: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        dp[i] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        len = Math.max(len, dp[i]);
    }
    return len;
};

describe("lengthOfLIS", () => {
    test("#1", () => {
        expect(lengthOfLIS([10,9,2,5,3,7,101,18])).toBe(4);
    });
});