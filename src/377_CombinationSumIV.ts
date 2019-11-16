/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function combinationSum4(nums: number[], target: number): number {
  const set = new Set<string>();
  function _helper(num: number = 0, soFar: string = "") {
    if (target === num) set.add(soFar);
    if (target < num) return;

    nums.forEach(n => {
      _helper(num + n, `${soFar}${n}`);
    });
  }

  _helper();

  return set.size;
}

describe("conbinationSum4", () => {
  test("#1", () => {
    expect(combinationSum4([1, 2, 3], 4)).toBe(7);
  });
});
