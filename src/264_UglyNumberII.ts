/**
 * https://leetcode.com/problems/ugly-number-ii/
 *
 * @param {number} n
 * @return {number}
 */

function nthUglyNumber(n: number): number {
  const dp: number[] = new Array();
  dp[0] = 1;
  let [p2, p3, p5] = [0, 0, 0];
  for (let i = 1; i < n; i++) {
    dp[i] = Math.min(Math.min(dp[p2] * 2, dp[p3] * 3), dp[p5] * 5);
    if (dp[i] === dp[p2] * 2) p2++;
    if (dp[i] === dp[p3] * 3) p3++;
    if (dp[i] === dp[p5] * 5) p5++;
  }

  return dp[n - 1];
}

describe("nthUglyNumber", () => {
  test("#1", () => {
    expect(nthUglyNumber(10)).toBe(12);
  });
});
