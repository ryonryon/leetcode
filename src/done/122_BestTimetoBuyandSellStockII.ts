/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 *
 * @param {number[]} prices
 * @return {number}
 */

function maxProfitII(prices: number[]): number {
  let profit = 0;
  let currentMin = Infinity;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < currentMin) {
      currentMin = prices[i];
    } else {
      profit += prices[i] - currentMin;
      currentMin = prices[i];
    }
  }

  return profit;
}

describe("maxProfitII", () => {
  test("#1", () => {
    expect(maxProfitII([7, 1, 5, 3, 6, 4])).toBe(7);
  });
  test("#2", () => {
    expect(maxProfitII([1, 2, 3, 4, 5])).toBe(4);
  });
  test("#3", () => {
    expect(maxProfitII([7, 6, 4, 3, 1])).toBe(0);
  });
});
