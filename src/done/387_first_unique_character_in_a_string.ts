/**
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 *
 * @param {string} s
 * @return {number}
 */

function firstUniqChar(s: string): number {
  const map: Map<string, boolean> = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], false);
    } else {
      map.set(s[i], true);
    }
  }
  let firstUniqCharacter: number = -1;

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) == true) {
      firstUniqCharacter = i;
      break;
    }
  }

  return firstUniqCharacter;
}

describe("first unique character", () => {
  test("#1", () => {
    expect(firstUniqChar("leetcode")).toBe(0);
  });
  test("#2", () => {
    expect(firstUniqChar("loveleetcode")).toBe(2);
  });
});
