/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

function combine(n: number, k: number): number[][] {
  const ans: number[][] = [];
  const temp: number[] = [];
  function backtraking(num: number = 1) {
    for (let i = num; i <= n; i++) {
      temp.push(i);
      if (temp.length === k) ans.push([...temp]);
      else if (temp.length < k) backtraking(i + 1);
      temp.pop();
    }
  }

  backtraking();
  return ans;
}

describe("combine", () => {
  test("#1", () => {
    expect(combine(4, 2)).toEqual([
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4]
    ]);
  });
});
