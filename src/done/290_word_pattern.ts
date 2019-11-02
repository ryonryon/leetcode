/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */

function wordPattern(pattern: string, str: string): boolean {
  const strArr = str.split(" ");
  if (pattern.length !== strArr.length) return false;

  const patternMap = new Map<string, string>();

  for (let i = 0; i < pattern.length; i++) {
    if (patternMap.has(pattern[i])) {
      if (patternMap.get(pattern[i]) !== strArr[i]) return false;
    }

    for (const [key, val] of patternMap) {
      if (key !== pattern[i] && val === strArr[i]) return false;
    }

    patternMap.set(pattern[i], strArr[i]);
  }

  return true;
}

describe("word pattern", () => {
  test("#1", () => {
    expect(wordPattern("abba", "dog cat cat dog")).toBe(true);
  });
  test("#2", () => {
    expect(wordPattern("abba", "dog cat cat fish")).toBe(false);
  });
  test("#3", () => {
    expect(wordPattern("aaaa", "dog cat cat dog")).toBe(false);
  });
  test("#4", () => {
    expect(wordPattern("abba", "dog dog dog dog")).toBe(false);
  });
});
