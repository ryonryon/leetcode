/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function search(nums: number[], target: number): number {
  function _helper(start: number, end: number): number {
    if (end - start === 0) return nums[start] === target ? start : -1;
    else if (end - start < 0) return -1;

    const mid = Math.floor((end - start) / 2) + start;

    if (nums[mid] === target) return mid;

    return nums[mid] < target ? _helper(mid + 1, end) : _helper(start, mid - 1);
  }

  return _helper(0, nums.length - 1);
}

describe("search", () => {
  test("#1", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  });
});
