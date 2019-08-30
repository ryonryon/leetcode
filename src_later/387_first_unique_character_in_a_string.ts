/**
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 *
 * @param {string} s
 * @return {number}
 */

function firstUniqChar(s: string): number {}

describe("first unique character", () => {
  test("#1", () => {
    expect(firstUniqChar("leetcode")).toBe(0);
  });
  test("#2", () => {
    expect(firstUniqChar("loveleetcode")).toBe(2);
  });
});
