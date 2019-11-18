/**
 * @param {number} n
 * @return {number}
 */

function climbStairsSecond(n: number): number {
  const memo = new Map<number, number>();
  function _helper(_n: number): number {
    if (memo.has(_n)) return memo.get(_n)!;
    if (_n === 0) return 1;
    if (_n < 0) return 0;

    memo.set(_n, _helper(_n - 1) + _helper(_n - 2));

    return memo.get(_n)!;
  }

  return _helper(n);
}

describe("climbStairsSecond", () => {
  test("#1", () => {
    expect(climbStairsSecond(2)).toBe(2);
  });
  test("#2", () => {
    expect(climbStairsSecond(3)).toBe(3);
  });
  test("#3", () => {
    expect(climbStairsSecond(5)).toBe(8);
  });
});
