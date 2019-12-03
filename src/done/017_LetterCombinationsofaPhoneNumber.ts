/**
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 *
 * @param {string} digits
 * @return {string[]}
 */

function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [];
  const dials = new Map<string, string[]>([
    ["2", ["a", "b", "c"]],
    ["3", ["d", "e", "f"]],
    ["4", ["g", "h", "i"]],
    ["5", ["j", "k", "l"]],
    ["6", ["m", "n", "o"]],
    ["7", ["p", "q", "r", "s"]],
    ["8", ["t", "u", "v"]],
    ["9", ["w", "x", "y", "z"]]
  ]);

  const ans: string[] = [];

  function helper(charAt: number = 0, word: string = "") {
    if (charAt === digits.length) {
      ans.push(word);
    } else {
      const dialChars = dials.get(digits.charAt(charAt))!;

      for (let i = 0; i < dialChars.length; i++) {
        helper(++charAt, `${word}${dialChars[i]}`);
        charAt--;
      }
    }
  }

  helper();

  return ans;
}

describe("letterCombinations", () => {
  test("#1", () => {
    expect(letterCombinations("23")).toEqual([
      "ad",
      "ae",
      "af",
      "bd",
      "be",
      "bf",
      "cd",
      "ce",
      "cf"
    ]);
  });
  test("#2", () => {
    expect(letterCombinations("")).toEqual([]);
  });
});
