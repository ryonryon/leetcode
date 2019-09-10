/**
 * https://leetcode.com/problems/maximum-subarray/
 *
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums: number[]): number {
  let maxNumberOfSubArray: number = 0 < nums.length ? nums[0] : 0;
  let tempSubArray: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + tempSubArray < nums[i]) {
      tempSubArray = nums[i];
    } else {
      tempSubArray = nums[i] + tempSubArray;
    }

    if (maxNumberOfSubArray < tempSubArray) {
      maxNumberOfSubArray = tempSubArray;
    }
  }

  return maxNumberOfSubArray;
}

function maxSubArrayHelper(nums: number[], soFar: number): number {
  if (soFar === nums.length - 1) {
    return nums[soFar];
  }

  return nums[soFar] + maxSubArrayHelper(nums, soFar + 1);
}

describe("max subarray", () => {
  test("#1", () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    // Explanation: [4,-1,2,1] has the largest sum = 6.
  });
  test("#2", () => {
    expect(maxSubArray([-1])).toBe(-1);
  });
});
