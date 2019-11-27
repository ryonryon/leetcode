/**
 * https://leetcode.com/problems/minimum-path-sum/
 *
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid: number[][]): number {
  if (grid.length === 0) return 0;
  if (grid[0].length === 0) return 0;
  const dp: number[][] = Array.from(new Array(grid.length), () =>
    new Array(grid[0].length).fill(Infinity)
  );

  function _helper(row: number, col: number): number {
    if (dp[row][col] !== Infinity) return dp[row][col];
    if (row === 0 && col === 0) return grid[0][0];

    const top = 0 <= row - 1 ? _helper(row - 1, col) : Infinity;
    const left = 0 <= col - 1 ? _helper(row, col - 1) : Infinity;

    dp[row][col] = Math.min(top, left) + grid[row][col];
    return dp[row][col];
  }

  return _helper(grid.length - 1, grid[0].length - 1);
}

describe("minPathSum", () => {
  test("#1", () => {
    expect(minPathSum([[]])).toBe(0);
  });
  test("#2", () => {
    expect(minPathSum([[0, 0]])).toBe(0);
  });
  test("#3", () => {
    expect(minPathSum([[0, 0], [0, 0]])).toBe(0);
  });
  test("#4", () => {
    expect(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]])).toBe(7);
  });
  test("#5", () => {
    expect(minPathSum([[1, 2, 3], [4, 5, 6]])).toBe(12);
  });
  test("#6", () => {
    expect(minPathSum([[1, 2], [1, 1]])).toBe(3);
  });
});
