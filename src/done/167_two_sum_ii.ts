/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 *
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

function twoSum(numbers: number[], target: number): number[] {
  const len = numbers.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const _tar = numbers[i] + numbers[j];
      if (_tar === target) return [i + 1, j + 1];
      else if (target < _tar) break;
    }
  }
  return [-1, -1];
}

describe('Two Sum II - Input array is sorted', () => {
  test('#1', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
    // Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
  });
  test('#2', () => {
    expect(twoSum([1, 2], 3)).toEqual([1, 2]);
  });
  test('#3', () => {
    expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
  });
});
