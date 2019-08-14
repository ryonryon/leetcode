/**
 * https://leetcode.com/problems/plus-one/
 *
 * @param {number[]} digits
 * @return {number[]}
 */

function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; 0 <= i; i--) {
    if (9 < digits[i] + 1) {
      digits[i] = digits[i] + 1 - 10;

      if (i == 0) {
        digits.unshift(1);
      }
    } else {
      digits[i] += 1;
      break;
    }
  }

  return digits;
}

describe("plus one", () => {
  test("#1", () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
    // Explanation: The array represents the integer 123.
  });
  test("#2", () => {
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
    // Explanation: The array represents the integer 123.
  });
  test("#3", () => {
    expect(plusOne([9])).toEqual([1, 0]);
    // Explanation: The array represents the integer 123.
  });
  test("#4", () => {
    expect(plusOne([9, 9, 9, 9])).toEqual([1, 0, 0, 0, 0]);
    // Explanation: The array represents the integer 123.
  });
});
