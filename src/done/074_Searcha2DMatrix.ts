/**
 * https://leetcode.com/problems/search-a-2d-matrix/
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length === 0 || matrix[0].length === 0) return false;

  function helper(
    startRow: number,
    startCol: number,
    endRow: number,
    endCol: number
  ): boolean {
    if (endRow < startRow || endCol < startCol) return false;
    const [pivotRow, pivotCol] = [
      Math.floor((endRow - startRow) / 2) + startRow,
      Math.floor((endCol - startCol) / 2) + startCol
    ];

    if (matrix[pivotRow][pivotCol] === target) return true;

    if (matrix[pivotRow][pivotCol] < target)
      return (
        helper(pivotRow, pivotCol + 1, pivotRow, endCol) ||
        helper(pivotRow + 1, startCol, endRow, endCol)
      );

    return (
      helper(startRow, startCol, pivotRow - 1, endCol) ||
      helper(pivotRow, startCol, pivotRow, pivotCol - 1)
    );
  }

  return helper(0, 0, matrix.length - 1, matrix[0].length - 1);
}

describe("searchMatrix", () => {
  const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]];
  test("#1", () => {
    expect(searchMatrix(matrix, 3)).toBe(true);
  });
  test("#2", () => {
    expect(searchMatrix(matrix, 13)).toBe(false);
  });
});
