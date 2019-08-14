/**
 * https://leetcode.com/problems/climbing-stairs/
 *
 * @param {number} n
 * @return {number}
 */
function climbStairs(n: number): number {
  if (memo.has(n)) {
    return memo.get(n)!;
  }

  const x = climbStairs(n - 2) + climbStairs(n - 1);

  memo.set(n, x);

  return x;
}

const memo = new Map<number, number>([[1, 1], [2, 2]]);

describe("climb stairs", () => {
  test("#1", () => {
    expect(climbStairs(2)).toBe(2);
  });
  test("#2", () => {
    expect(climbStairs(3)).toBe(3);
  });
  test("#3", () => {
    expect(climbStairs(44)).toBe(1134903170);
  });
});
