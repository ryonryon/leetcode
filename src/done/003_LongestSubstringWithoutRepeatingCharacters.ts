/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * @param {string} s
 * @return {number}
 */

function lengthOfLongestSubstring(s: string): number {
  const dp: string[] = [];
  let longest: number = 0;

  for (let i = 0; i < s.length; i++) {
    const val = s.charAt(i);

    if (dp.includes(val)) {
      const leng = dp.length;
      for (let j = 0; j < leng; j++) {
        if (dp[0] === val) {
          dp.shift();
          break;
        }
        dp.shift();
      }
    }
    dp.push(val);

    if (longest < dp.length) {
      longest = dp.length;
    }
  }
  return longest;
}

describe("lengthOfLongestSubstring", () => {
  test("#1", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });
  test("#2", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });
  test("#3", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });
  test("#4", () => {
    expect(lengthOfLongestSubstring("ohvhjdml")).toBe(6);
  });
});
