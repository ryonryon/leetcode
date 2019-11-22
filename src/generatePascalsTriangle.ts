/**
 * https://leetcode.com/explore/learn/card/recursion-i/251/scenario-i-recurrence-relation/1659/
 *
 * @param {number} numRows
 * @return {number[][]}
 */

function generate(numRows: number): number[][] {
  function _helper(i: number, j: number): number {
    if (i === 0 || j === 0) {
      ans[i][j] = 1;
    } else {
      ans[i][j] = _helper(i - 1, j - 1) + _helper(i - 1, j);
    }

    return ans[i][j];
  }

  const ans: number[][] = [];

  for (let i = 0; i < numRows; i++) {
    ans.push(new Array(i + 1).fill(0));
    // [ans[i][0], ans[i][ans[i].length - 1]] = [1, 1];
  }

  for (let i = 0; i < ans[numRows - 1].length; i++) {
    ans[numRows - 1][i] = _helper(numRows - 1, i);
  }

  console.log(ans);
  return ans;
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