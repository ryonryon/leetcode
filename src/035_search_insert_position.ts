/**
 * https://leetcode.com/problems/search-insert-position/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function searchInsert(nums: number[], target: number): number {
  if (nums.length == 0) {
    return 0;
  }
  return searchInsertHelper(nums, target, 0, nums.length - 1);
}

function searchInsertHelper(
  nums: number[],
  target: number,
  startIndex: number,
  endIndex: number
): number | null {
  if (endIndex - startIndex + 1 == 1) {
    if (nums[startIndex] < target) {
      return startIndex + 1;
    } else {
      return startIndex;
    }
  }

  let index: number | null = null;
  const middleIndex: number =
    Math.floor((endIndex - startIndex + 1) / 2) + startIndex;

  if (nums[middleIndex] <= target) {
    index = searchInsertHelper(nums, target, middleIndex, endIndex);
  } else {
    index = searchInsertHelper(nums, target, startIndex, middleIndex - 1);
  }

  return index;
}

describe("search insert position", () => {
  test("#1", () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  });
  test("#2", () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
  });
  test("#3", () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
  });
  test("#4", () => {
    expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
  });
  test("#5", () => {
    expect(searchInsert([], 0)).toBe(0);
  });
  test("#6", () => {
    expect(searchInsert([1], 0)).toBe(0);
  });
  test("#7", () => {
    expect(searchInsert([1, 3, 4, 6, 7, 10], 11)).toBe(6);
  });
});
