/**
 * https://leetcode.com/explore/learn/card/recursion-i/251/scenario-i-recurrence-relation/1659/
 *
 * @param {number} numRows
 * @return {number[][]}
 */

function generate(numRows: number): number[][] {
  const triangle: number[][] = [];
  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(0);
    row[0] = 1;
    row[row.length - 1] = 1;

    for (let j = 1; j < row.length - 1; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }

    triangle.push(row);
  }
  return triangle;
}

describe("generate", () => {
  test("#1", () => {
    expect(generate(5)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1]
    ]);
  });
});
