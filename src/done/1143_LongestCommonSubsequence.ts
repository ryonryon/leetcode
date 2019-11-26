/**
 * https://leetcode.com/problems/longest-common-subsequence/
 *
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

function longestCommonSubsequence(text1: string, text2: string): number {
  const dp: number[][] = Array.from(new Array(text1.length + 1), () =>
    new Array(text2.length + 1).fill(-1)
  );
  function lcs(n: number, m: number): number {
    if (dp[n][m] !== -1) return dp[n][m];
    if (n === text1.length || m === text2.length) {
      dp[n][m] = 0;
    } else if (text1.charAt(n) === text2.charAt(m)) {
      dp[n][m] = 1 + lcs(n + 1, m + 1);
    } else {
      dp[n][m] = Math.max(lcs(n, m + 1), lcs(n + 1, m));
    }

    return dp[n][m];
  }

  return lcs(0, 0);
}

describe("longestCommonSubsequence", () => {
  test("#1", () => {
    expect(longestCommonSubsequence("abcde", "ace")).toBe(3);
  });
  test("#2", () => {
    expect(longestCommonSubsequence("abc", "abc")).toBe(3);
  });
  test("#3", () => {
    expect(longestCommonSubsequence("abc", "def")).toBe(0);
  });
});
