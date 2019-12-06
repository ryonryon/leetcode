/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchSec(nums: number[], target: number): number {
  if (nums.length < 1) return -1;
  let [lo, hi] = [0, nums.length - 1];
  let inLeft = nums[nums.length - 1] < target;

  while (lo < hi) {
    const mid = Math.floor((hi - lo) / 2) + lo;
    if (inLeft) {
      if (nums[mid] < target && nums[nums.length - 1] < nums[mid]) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    } else {
      if (nums[mid] < target || nums[nums.length - 1] < nums[mid]) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }
  }

  return nums[hi] === target ? hi : -1;
}

describe("searchSec", () => {
  test("#1", () => {
    expect(searchSec([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  });
});
