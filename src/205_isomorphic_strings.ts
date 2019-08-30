/**
 * https://leetcode.com/problems/isomorphic-strings/
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isIsomorphic(s: string, t: string): boolean {
  if (s.length == 1) {
    return true;
  }

  let sMap: Map<string, number[]> = new Map();
  let tMap: Map<string, number[]> = new Map();

  for (let i = 0; i < s.length; i++) {
    if (sMap.has(s[i])) {
      sMap.get(s[i]).push(i);
    } else {
      sMap.set(s[i], [i]);
    }

    if (tMap.has(t[i])) {
      tMap.get(t[i]).push(i);
    } else {
      tMap.set(t[i], [i]);
    }

    let sMapMember: number[] = sMap.get(s[i]);
    let tMapMember: number[] = tMap.get(t[i]);

    for (let j = 0; j < sMapMember.length; j++) {
      if (sMapMember[j] !== tMapMember[j]) {
        return false;
      }
    }
  }

  return true;
}

describe("is isomorphic", () => {
  test("#1", () => {
    expect(isIsomorphic("foo", "gee")).toBe(true);
  });
  test("#2", () => {
    expect(isIsomorphic("foo", "bar")).toBe(false);
  });
  test("#3", () => {
    expect(isIsomorphic("paper", "title")).toBe(true);
  });
});
