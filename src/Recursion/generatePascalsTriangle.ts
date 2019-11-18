/**
 * https://leetcode.com/explore/learn/card/recursion-i/251/scenario-i-recurrence-relation/1659/
 *
 * @param {number} numRows
 * @return {number[][]}
 */

function generate(numRows: number): number[][] {
  function _helper(i: number, j: number): number {
    if (i === 0 || j === 0) return ans[i][j];
    return _helper(i - 1, j - 1) + _helper(i - 1, j);
  }

  const ans: number[][] = [];

  for (let i = 0; i < numRows + 1; i++) {
    for (let j = 0; j < i + 1; j++) {
      _;
    }
  }
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
