function knapsackProblem(jewels: [number, number][], amount: number) {
  const dp: number[][] = Array.from(
    new Array(jewels.length).fill(new Array(jewels.length).fill(-1))
  );
  function _helper(i: number, j: number): number {
    if (0 <= dp[i][j]) return dp[i][j];
    if (i === jewels.length) return 0;
    let result;
    const [w, v] = jewels[i];
    if (j < w) {
      result = _helper(i + 1, j);
    } else {
      result = Math.max(_helper(i + 1, j), _helper(i + 1, j - w) + v);
    }
    dp[i][j] = result;
    return result;
  }

  return _helper(0, amount);
}

describe("knapsackProblem", () => {
  test("#1", () => {
    expect(knapsackProblem([[2, 3], [1, 2], [3, 4], [2, 2]], 5)).toBe(7);
  });
});
