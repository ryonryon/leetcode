/**
 * https://leetcode.com/explore/learn/card/recursion-i/251/scenario-i-recurrence-relation/1660/
 *
 * @param {number} rowIndex
 * @return {number[]}
 */

function getRow(rowIndex: number): number[] {
  const triangle: number[][] = [];
  for (let i = 0; i <= rowIndex; i++) {
    const row = new Array(i + 1).fill(0);
    row[0] = 1;
    row[row.length - 1] = 1;

    for (let j = 1; j < row.length - 1; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }

    triangle.push(row);
  }
  return triangle[rowIndex];
}

describe("getRow", () => {
  test("#1", () => {
    expect(getRow(3)).toEqual([1, 3, 3, 1]);
  });
});
