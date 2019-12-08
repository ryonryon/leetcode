/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
function findContentChildren(g: number[], s: number[]): number {
  g = g.sort((a: number, b: number) => a - b);
  s = s.sort((a: number, b: number) => a - b);
  let ans = 0;
  let i = 0;
  let j = 0;

  while (i < s.length) {
    if (g[j] <= s[i]) {
      ans++;
      j++;
    }
    i++;
  }

  return ans;
}

describe("findContentChildren", () => {
  test("#1", () => {
    expect(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8])).toBe(2);
  });
});
