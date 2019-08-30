/**
 * https://leetcode.com/problems/power-of-two/
 *
 * @param {number} n
 * @return {boolean}
 */

function isPowerOfTwo(n: number): boolean {
  let p = 0;
  while (true) {
    let ans = Math.pow(2, p);
    if (ans == n) {
      return true;
    } else if (n < ans) {
      break;
    }
    p += 1;
  }

  return false;
}

describe("is power of two", () => {
  test("#1", () => {
    expect(isPowerOfTwo(1)).toBe(true);
  });
  test("#2", () => {
    expect(isPowerOfTwo(16)).toBe(true);
  });
  test("#3", () => {
    expect(isPowerOfTwo(218)).toBe(false);
  });
});
