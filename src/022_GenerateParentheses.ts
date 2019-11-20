/**
 * https://leetcode.com/problems/generate-parentheses/
 * https://leetcode.com/explore/learn/card/recursion-ii/503/recursion-to-iteration/2772/
 *
 * @param {number} n
 * @return {string[]}
 */

function generateParenthesis(n: number): string[] {}

describe("generateParenthesis", () => {
  test("#1", () => {
    expect(generateParenthesis(3)).toEqual([
      "((()))",
      "(()())",
      "(())()",
      "()(())",
      "()()()"
    ]);
  });
});
