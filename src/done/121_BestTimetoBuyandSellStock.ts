/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 * @param {number[]} prices
 * @return {number}
 */

function maxProfit(prices: number[]): number {
  let biggestBenefit = 0;
  let smallestPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (smallestPrice < prices[i]) {
      if (biggestBenefit < prices[i] - smallestPrice)
        biggestBenefit = prices[i] - smallestPrice;
    } else {
      smallestPrice = prices[i];
    }
  }

  return biggestBenefit;
}

describe("maxProfit", () => {
  test("#1", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });
  test("#1", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });
});
