/**
 * https://leetcode.com/problems/is-subsequence/
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isSubsequence(s: string, t: string): boolean {
  let [i, j] = [0, 0];
  while (i < s.length && j < t.length) {
    if (s.charAt(i) === t.charAt(j)) i++;
    j++;
  }

  return i === s.length;
}

describe("isSubsequence", () => {
  test("#1", () => {
    expect(isSubsequence("abc", "ahbgdc")).toBe(true);
  });
});

export default isSubsequence;
