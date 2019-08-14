/**
 * https://leetcode.com/problems/length-of-last-word/
 *
 * @param {string} s
 * @return {number}
 */

function lengthOfLastWord(s: string): number {
  const arr = s.split(" ");

  for (let i = arr.length - 1; 0 <= i; i--) {
    if (arr[i] != "") {
      return arr[i].length;
    }
  }
  return 0;
}

describe("length of last word", () => {
  test("#1", () => {
    expect(lengthOfLastWord("a ")).toBe(1);
  });
});
