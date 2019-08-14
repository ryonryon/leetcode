/**
 * https://leetcode.com/problems/single-number/
 *
 * @param {number[]} nums
 * @return {number}
 */

function singleNumber(nums: number[]): number {
  let numberSet = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    console.log(numberSet.has(nums[i]));
    if (numberSet.has(nums[i])) {
      numberSet.delete(nums[i]);
    } else {
      numberSet.add(nums[i]);
    }
  }
  let s: number = 0;
  numberSet.forEach(item => {
    s = item;
  });

  return s;
}

describe("single number", () => {
  test("#1", () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
  });
  test("#1", () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
  });
});
