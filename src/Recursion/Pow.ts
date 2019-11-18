/**
 * https://leetcode.com/explore/featured/card/recursion-i/256/complexity-analysis/2380/
 *
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

function myPow(x: number, n: number): number {
  if (n === 0) return 1;
  if (n < 0) {
    x = 1 / x;
    n = -1 * n;
  }
  let sum = 1;

  for (let i = 1; i <= n; i++) {
    sum = sum * x;
  }

  return sum;
}

describe("myPow", () => {
  test("#1", () => {
    expect(myPow(2, 2)).toBe(4);
  });
  test("#2", () => {
    expect(myPow(2, 10)).toBe(1024);
  });
  test("#3", () => {
    expect(myPow(2, -2)).toBe(0.25);
  });
  test("#4", () => {
    expect(myPow(1.00001, 123456)).toBe(3.436844752090731);
  });
});
