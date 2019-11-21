/**
 * https://leetcode.com/problems/combination-sum-ii/
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

function combinationSum2(candidates: number[], target: number): number[][] {
  const ans: number[][] = [];
  const set = new Set<string>();
  const temp: number[] = [];

  function backtracking(num: number = 0) {
    for (let i = num; i < candidates.length; i++) {
      temp.push(candidates[i]);
      const sum = temp.reduce((a, b) => a + b, 0);
      if (sum === target) {
        const sortedStringTemp = [...temp].sort((a, b) => a - b).join("");
        if (!set.has(sortedStringTemp)) {
          set.add(sortedStringTemp);
          ans.push([...temp]);
        }
      } else if (sum < target) backtracking(i + 1);
      temp.pop();
    }
  }

  backtracking();

  return ans;
}

describe("combinationSum2", () => {
  test("#1", () => {
    expect(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)).toEqual([
      [1, 2, 5],
      [1, 7],
      [1, 6, 1],
      [2, 6]
    ]);
  });
});
