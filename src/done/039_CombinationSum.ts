/**
 * https://leetcode.com/problems/combination-sum/
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates: number[], target: number): number[][] {
  const temp: number[] = [];
  const ans: number[][] = [];

  function backtracking(num: number = 0) {
    for (let i = num; i < candidates.length; i++) {
      temp.push(candidates[i]);
      const sum = temp.reduce((a, b) => a + b, 0);
      if (sum === target) ans.push([...temp]);
      else if (sum < target) backtracking(i);
      temp.pop();
    }
  }
  backtracking();

  return ans;
}
describe("combinationSum", () => {
  test("#1", () => {
    expect(combinationSum([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]]);
  });

  test("#2", () => {
    expect(combinationSum([2, 3, 5], 8)).toEqual([
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5]
    ]);
  });

  test("#3", () => {
    expect(combinationSum([3, 12, 9, 11, 6, 7, 8, 5, 4], 15)).toEqual([
      [3, 3, 3, 3, 3],
      [3, 3, 3, 6],
      [3, 3, 9],
      [3, 3, 5, 4],
      [3, 12],
      [3, 6, 6],
      [3, 7, 5],
      [3, 8, 4],
      [3, 4, 4, 4],
      [9, 6],
      [11, 4],
      [6, 5, 4],
      [7, 8],
      [7, 4, 4],
      [5, 5, 5]
    ]);
  });
});
