/**
 * https://leetcode.com/problems/count-numbers-with-unique-digits/
 *
 * @param {number} n
 * @return {number}
 */

function countNumbersWithUniqueDigits2(n: number): number {}

describe("countNumbersWithUniqueDigits2", () => {
  test("#1", () => {
    expect(countNumbersWithUniqueDigits2(2)).toBe(91);
  });
  test("#2", () => {
    expect(countNumbersWithUniqueDigits2(4)).toBe(5275);
  });
});
