/**
 * @param {number[]} nums
 * @return {number[]}
 */

function quickSortSecond(nums: number[]): void {
  qsort(nums, 0, nums.length - 1);
}

function qsort(nums: number[], lo: number, hi: number) {
  if (lo < hi) {
    const p = partition(nums, lo, hi);
    qsort(nums, lo, p - 1);
    qsort(nums, p + 1, hi);
  }
}

function partition(nums: number[], lo: number, hi: number): number {
  const pivot = nums[hi];
  let i = lo;
  for (let j = lo; j < hi; j++) {
    if (nums[j] < pivot) {
      const temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      i++;
    }
  }
  const temp = nums[hi];
  nums[hi] = nums[i];
  nums[i] = temp;

  return i;
}

describe("quickSortSecond", () => {
  test("1", () => {
    const arr = [1, 5, 3, 2, 8, 7, 6, 4];
    quickSortSecond(arr);

    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
