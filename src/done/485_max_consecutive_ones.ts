/**
 * https://leetcode.com/problems/max-consecutive-ones/
 *
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums: number[]): number {
  let ans = 0;
  let current = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      current++;
    } else {
      if (ans < current) ans = current;
      current = 0;
    }
  }
  if (ans < current) ans = current;

  return ans;
};

describe('Max Consecutive Ones', () => {
  test('#1', () => {
    expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toEqual(3);
  });
  test('#2', () => {
    expect(findMaxConsecutiveOnes([1])).toEqual(1);
  });
});
