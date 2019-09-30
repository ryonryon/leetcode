/**
 * https://leetcode.com/problems/unique-paths/
 *
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

function uniquePaths(m: number, n: number): number {
  var memo = new Map();

  function uniquePathsHelper(m: number, n: number): number {
    if (m < 1 || n < 1) return 0;
    if (m === 1 && n === 1) return 1;

    const key = `${m}*${n}`;

    if (!memo.has(key)) {
      const key2 = `${m - 1}*${n}`;
      const key3 = `${m}*${n - 1}`;
      if (!memo.has(key2)) {
        memo.set(key2, uniquePathsHelper(m - 1, n));
      }
      if (!memo.has(key3)) {
        memo.set(key3, uniquePathsHelper(m, n - 1));
      }
      memo.set(key, memo.get(key2) + memo.get(key3));
    }
    return memo.get(key);
  }

  return uniquePathsHelper(m, n);
}

describe("unique paths", () => {
  test("#1", () => {
    expect(uniquePaths(0, 0)).toBe(0);
  });
  test("#2", () => {
    expect(uniquePaths(3, 1)).toBe(1);
  });
  test("#3", () => {
    expect(uniquePaths(3, 2)).toBe(3);
  });
  test("#4", () => {
    expect(uniquePaths(3, 3)).toBe(6);
  });
  test("#5", () => {
    expect(uniquePaths(5, 5)).toBe(70);
  });
});
