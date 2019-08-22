/**
 *
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) {
    return false;
  }

  const mapS = new Map<string, number>();
  const mapT = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    if (mapS.has(s[i])) {
      mapS.set(s[i], mapS.get(s[i])! + 1);
    } else {
      mapS.set(s[i], 1);
    }
    if (mapT.has(t[i])) {
      mapT.set(t[i], mapT.get(t[i])! + 1);
    } else {
      mapT.set(t[i], 1);
    }
  }

  if (mapS.keys.length != mapT.keys.length) {
    return false;
  }

  for (const [key, val] of mapS.entries()) {
    if (!mapT.has(key)) {
      return false;
    }

    if (mapT.get(key) != val) {
      return false;
    }
  }

  return true;
}

describe("is anagram", () => {
  test("#1", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
  });
  test("#2", () => {
    expect(isAnagram("rat", "car")).toBe(false);
  });
});
