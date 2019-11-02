/**
 * https://leetcode.com/problems/happy-number/
 *
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n: number): boolean {
  if (n === 1) return true;

  if (n === 4) return false;

  return isHappy(
    `${n}`
      .split("")
      .reduce((total, element) => total + Math.pow(parseInt(element), 2), 0)
  );
}

describe("is happy number", () => {
  test("#1", () => {
    expect(isHappy(19)).toBe(true);
  });
});
