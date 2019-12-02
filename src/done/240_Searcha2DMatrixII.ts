/**
 * https://leetcode.com/explore/learn/card/recursion-ii/470/divide-and-conquer/2869/
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length < 1 || matrix[0].length < 1) return false;

  function helper(
    startRow: number,
    startCol: number,
    endRow: number,
    endCol: number
  ): boolean {
    const [pivotRow, pivotCol] = [
      Math.floor((endRow - startRow) / 2) + startRow,
      Math.floor((endCol - startCol) / 2) + startCol
    ];

    if (startRow > endRow || startCol > endCol) return false;
    if (matrix[pivotRow][pivotCol] === target) return true;

    if (matrix[pivotRow][pivotCol] < target)
      return (
        helper(pivotRow + 1, pivotCol + 1, endRow, endCol) ||
        helper(pivotRow + 1, startCol, endRow, pivotCol) ||
        helper(startRow, pivotCol + 1, pivotRow, endCol)
      );

    return (
      helper(startRow, startCol, pivotRow - 1, pivotCol - 1) ||
      helper(startRow, pivotCol, pivotRow - 1, endCol) ||
      helper(pivotRow, startCol, endRow, pivotCol - 1)
    );
  }

  return helper(0, 0, matrix.length - 1, matrix[0].length - 1);
}

describe("searchMatrix", () => {
  const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ];
  const matrix2 = [[-1, 3]];
  const matrix3 = [[1, 1]];

  test("#1", () => {
    expect(searchMatrix(matrix, 5)).toBe(true);
  });
  test("#2", () => {
    expect(searchMatrix(matrix, 20)).toBe(false);
  });
  test("#3", () => {
    expect(searchMatrix(matrix2, 3)).toBe(true);
  });
  test("#4", () => {
    expect(searchMatrix(matrix3, 2)).toBe(false);
  });
});
