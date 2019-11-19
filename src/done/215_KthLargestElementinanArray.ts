/**
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function findKthLargest(nums: number[], k: number): number {
  function _qsort(nums: number[], lo: number, hi: number, k: number): number {
    if (hi <= lo) return nums[nums.length - k];
    const p = _partition(nums, lo, hi);
    if (nums.length - k === p) return nums[p];

    return nums.length - k < p
      ? _qsort(nums, lo, p - 1, k)
      : _qsort(nums, p + 1, hi, k);
  }

  function _partition(nums: number[], lo: number, hi: number): number {
    const pivot = nums[hi];
    let i = lo;
    for (let j = lo; j < hi; j++) {
      if (nums[j] < pivot) {
        _swap(nums, i, j);
        i++;
      }
    }
    _swap(nums, i, hi);

    return i;
  }

  function _swap(nums: number[], i: number, j: number) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  if (nums.length === 1) return nums[0];

  return _qsort(nums, 0, nums.length - 1, k);
}

describe("findKthLarget", () => {
  test("#1", () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
  });
  test("#2", () => {
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
  });
  test("#3", () => {
    expect(findKthLargest([1], 1)).toBe(1);
  });
  test("#4", () => {
    expect(findKthLargest([2, 1], 1)).toBe(2);
  });
  test("#5", () => {
    expect(findKthLargest([-1, 2, 0], 1)).toBe(2);
  });
});
