/**
 * https://leetcode.com/problems/longest-palindromic-subsequence/
 *
 * @param {string} s
 * @return {number}
 */
function longestPalindrome(s: string): number {
  const dp: number[][] = Array.from(new Array(s.length), () =>
    new Array(s.length).fill(-1)
  );
  function _helper(left: number, right: number): number {
    if (dp[left][right] !== -1) return dp[left][right];
    if (left === right) return 1;
    if (left > right) return 0;
    if (s[left] === s[right]) {
      dp[left][right] = 2 + _helper(left + 1, right - 1);
    } else {
      dp[left][right] = Math.max(
        _helper(left + 1, right),
        _helper(left, right - 1)
      );
    }

    return dp[left][right];
  }

  return _helper(0, s.length - 1);
}

describe("longestPalindrome", () => {
  test("_#1", () => {
    expect(longestPalindrome("bbbab")).toBe(4);
  });
  test("_#2", () => {
    expect(longestPalindrome("cbbd")).toBe(2);
  });
});
