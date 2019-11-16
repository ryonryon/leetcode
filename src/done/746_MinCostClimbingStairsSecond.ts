/**
 * @param {number[]} cost
 * @return {number}
 */

function minCostClimbingStairsSecond(cost: number[]): number {
  if (cost.length === 0) return 0;
  if (cost.length === 1) return cost[0];
  if (cost.length === 2) return Math.min(cost[0], cost[1]);

  const dp: number[] = [cost[0], cost[1]];
  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }

  return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
}

describe("minCostClimbingStairsSecond", () => {
  test("#1", () => {
    expect(minCostClimbingStairsSecond([10, 15, 20])).toBe(15);
  });
  test("#2", () => {
    expect(
      minCostClimbingStairsSecond([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])
    ).toBe(6);
  });
});
