/**
 * https://leetcode.com/problems/climbing-stairs/
 *
 * @param {number} n
 * @return {number}
 */
function climbStairs(n: number): number {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return 0;
  }

  return climbStairs(n - 2) + climbStairs(n - 1);
}

describe("climb stairs", () => {
  test("#1", () => {
    expect(climbStairs(2)).toBe(2);
  });
  test("#2", () => {
    expect(climbStairs(3)).toBe(3);
  });
  //   test("#3", () => {
  //     expect(climbStairs(44)).toBe(3);
  //   });
});
