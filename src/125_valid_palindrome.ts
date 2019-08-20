/**
 * https://leetcode.com/problems/valid-palindrome/
 *
 * @param {string} s
 * @return {boolean}
 */

function isPalindrome(s: string): boolean {
  if (s.length == 0 || s.length == 1) {
    return true;
  }
  let sanitizedArray: string[] = [];
  for (let i = 0; i < s.length; i++) {
    // 0 to 9
    if (48 <= s.charCodeAt(i) && s.charCodeAt(i) <= 57) {
      sanitizedArray.push(s[i]);
    }
    // A to Z
    if (65 <= s.charCodeAt(i) && s.charCodeAt(i) <= 90) {
      sanitizedArray.push(s[i].toLowerCase());
    }
    // a to z
    if (97 <= s.charCodeAt(i) && s.charCodeAt(i) <= 122) {
      sanitizedArray.push(s[i]);
    }
  }

  for (let i = 0; i < Math.floor(sanitizedArray.length / 2); i++) {
    if (sanitizedArray[i] != sanitizedArray[sanitizedArray.length - i - 1]) {
      return false;
    }
  }

  return true;
}

describe("is palindrome", () => {
  test("#1", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });
  test("#2", () => {
    expect(isPalindrome("race a car")).toBe(false);
  });
  test("#3", () => {
    expect(isPalindrome("")).toBe(true);
  });
  test("#4", () => {
    expect(isPalindrome("r")).toBe(true);
  });
});
