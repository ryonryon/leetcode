/**
 * https://leetcode.com/problems/unique-paths-ii/
 *
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  if (obstacleGrid.length === 0 || obstacleGrid[0].length === 0) return 0;
  if (obstacleGrid.length === 1 && obstacleGrid[0].length === 1)
    return obstacleGrid[0][0] === 0 ? 1 : 0;

  const dp: number[][] = Array.from(new Array(obstacleGrid.length), () =>
    new Array(obstacleGrid[0].length).fill(-1)
  );

  function _helper(row: number, col: number): number {
    if (dp[row][col] !== -1) return dp[row][col];
    if (row === 0 && col === 0) return obstacleGrid[row][col] === 0 ? 1 : 0;
    if (obstacleGrid[row][col] === 1) return 0;
    const top = 0 < row ? _helper(row - 1, col) : 0;
    const left = 0 < col ? _helper(row, col - 1) : 0;

    dp[row][col] = top + left;
    return dp[row][col];
  }

  return _helper(obstacleGrid.length - 1, obstacleGrid[0].length - 1);
}

describe("uniquePathsWithObstacles", () => {
  test("#1", () => {
    expect(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]])).toBe(2);
  });
  test("#2", () => {
    expect(uniquePathsWithObstacles([[1]])).toBe(0);
  });
  test("#3", () => {
    expect(uniquePathsWithObstacles([[0]])).toBe(1);
  });
  test("#4", () => {
    expect(uniquePathsWithObstacles([[0, 1]])).toBe(0);
  });
  test("#5", () => {
    expect(uniquePathsWithObstacles([[1, 0]])).toBe(0);
  });
});
