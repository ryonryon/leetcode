/**
 * @param {number} num
 * @return {boolean}
 */

function isPerfectSquare(num: number): boolean {
  if (num === 0) return false;
  function helper(start: number, end: number): boolean {
    if (end < start) return false;
    const mid = Math.floor((end - start) / 2) + start;
    if (mid * mid === num) return true;
    else if (mid * mid < num) return helper(mid + 1, end);
    else return helper(start, mid - 1);
  }

  return helper(0, num);
}

describe("isPerfectSquare", () => {
  test("#1", () => {
    expect(isPerfectSquare(16)).toBe(true);
  });
  test("#2", () => {
    expect(isPerfectSquare(14)).toBe(false);
  });
});
