/**
 * https://leetcode.com/problems/merge-sorted-array/
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (m === 0) {
    for (let i = 0; i < n; i++) {
      nums1[i] = nums2[i];
    }
    return;
  } else if (n === 0) {
    return;
  }
  let nums1Index: number = 0;
  let nums2Index: number = 0;
  let loopCount: number = m + n;

  while (nums2Index < n) {
    if (m <= nums1Index) {
      nums1[nums1Index] = nums2[nums2Index];
      nums2Index++;
    } else if (nums2[nums2Index] < nums1[nums1Index]) {
      for (let j = loopCount - 1; nums1Index < j; j--) {
        nums1[j] = nums1[j - 1];
      }
      nums1[nums1Index] = nums2[nums2Index];
      nums2Index++;
      m++;
    }
    nums1Index++;
  }
}

describe("merge sorted array", () => {
  test("#1", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 5, 6];
    const n = 3;

    merge(nums1, m, nums2, n);

    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  test("#2", () => {
    const nums1 = [0];
    const m = 0;
    const nums2 = [1];
    const n = 1;

    merge(nums1, m, nums2, n);

    expect(nums1).toEqual([1]);
  });

  test("#3", () => {
    const nums1 = [1, 0];
    const m = 1;
    const nums2 = [2];
    const n = 1;

    merge(nums1, m, nums2, n);

    expect(nums1).toEqual([1, 2]);
  });
});
