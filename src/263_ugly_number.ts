/**
 * https://leetcode.com/problems/ugly-number/
 *
 * @param {number} num
 * @return {boolean}
 */

function isUgly(num: number): boolean {
  return isUglyHelper(num, 1);
}

function isUglyHelper(num: number, soFar: number): boolean {
  if (soFar === num) {
    return true;
  } else if (num < soFar) {
    return false;
  }

  let t = isUglyHelper(num, soFar * 2);
  let t2 = isUglyHelper(num, soFar * 3);
  let t3 = isUglyHelper(num, soFar * 5);
  if (t || t2 || t3) return true;
  return false;
}

describe("is ugly", () => {
  test("#1", () => {
    expect(isUgly(6)).toBe(true);
  });
  test("#2", () => {
    expect(isUgly(8)).toBe(true);
  });
  test("#3", () => {
    expect(isUgly(14)).toBe(false);
  });
});
