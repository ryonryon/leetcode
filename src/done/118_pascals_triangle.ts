/**
 * https://leetcode.com/problems/pascals-triangle/
 *
 * @param {number} numRows
 * @return {number[][]}
 */

function generatePascalsTriangle(numRows: number): number[][] {
  if (numRows === 0) return [];
  const triangle: number[][] = [];

  for (let i = 1; i <= numRows; i++) {
    const triangleLine = [];
    for (let j = 1; j <= i; j++) {
      if (j === 1 || j === i) triangleLine.push(1);
      else triangleLine.push(triangle[triangle.length - 1][j - 2] + triangle[triangle.length - 1][j - 1]);
    }
    triangle.push(triangleLine);
  }

  return triangle;
}

describe("Pascal's Triangle", () => {
  test('#1', () => {
    expect(generatePascalsTriangle(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
  });
});
