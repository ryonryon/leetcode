/**
 * https://leetcode.com/problems/number-of-matching-subsequences/
 *
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */

function numMatchingSubseq(S: string, words: string[]): number {
  function _isSubSeq(s: string): boolean {
    let [i, j] = [0, 0];
    while (i < s.length && j < S.length) {
      if (s.charAt(i) === S.charAt(j)) i++;
      j++;
    }

    return i === s.length;
  }

  return words.reduce((a, b) => {
    return _isSubSeq(b) ? a + 1 : a;
  }, 0);
}

describe("numMatchingSubseq", () => {
  test("#1", () => {
    expect(numMatchingSubseq("abcde", ["a", "bb", "acd", "ace"])).toBe(3);
  });
});
