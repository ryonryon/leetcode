/**
 * https://leetcode.com/problems/remove-element/
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums: number[], val: number): number {
  let pointer = 0;
  while (pointer < nums.length) {
    if (nums[pointer] == val) {
      nums.splice(pointer, 1);
      continue;
    }
    pointer++;
  }

  return nums.length;
}

describe('remove element', () => {
  test('#1', () => {
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
  });
});
