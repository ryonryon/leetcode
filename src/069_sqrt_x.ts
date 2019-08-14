/**
 * https://leetcode.com/problems/sqrtx/
 *
 * @param {number} x
 * @return {number}
 */

function mySqrt(x: number): number {
  return Math.floor(Math.sqrt(x));
}

describe("sqrt x", () => {
  test("#1", () => {
    expect(mySqrt(4)).toBe(2);
  });
  test("#2", () => {
    expect(mySqrt(8)).toBe(2);
  });
});
