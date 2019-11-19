/**
 * https://leetcode.com/explore/learn/card/recursion-ii/470/divide-and-conquer/2869/
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length === 1 && matrix[0].length === 1)
    return target === matrix[0][0];
  if (matrix.length < 1 || matrix[0].length < 1) return false;

  const [pivotRow, pivotCol] = [
    Math.floor(matrix.length / 2),
    Math.floor(matrix[0].length / 2)
  ];

  const rightTop = searchMatrix(
    matrix
      .slice(0, pivotRow + 1)
      .map(item => item.slice(pivotCol, matrix.length)),
    target
  );

  const leftBottom = searchMatrix(
    matrix
      .slice(pivotRow, matrix.length)
      .map(item => item.slice(0, pivotCol + 1)),
    target
  );

  const leftTopOrRightBottom =
    target < matrix[pivotRow][pivotCol]
      ? searchMatrix(
          matrix.slice(0, pivotRow).map(item => item.slice(0, pivotCol)),
          target
        )
      : searchMatrix(
          matrix
            .slice(pivotRow + 1, matrix.length)
            .map(item => item.slice(pivotCol + 1, matrix.length)),
          target
        );

  return rightTop || leftBottom || leftTopOrRightBottom;
}

describe("searchMatrix", () => {
  const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ];
  test("#1", () => {
    expect(searchMatrix(matrix, 5)).toBe(true);
  });
  test("#2", () => {
    expect(searchMatrix(matrix, 20)).toBe(false);
  });

  const matrix2 = [[-1, 3]];

  test("#3", () => {
    expect(searchMatrix(matrix2, 3)).toBe(true);
  });
});
