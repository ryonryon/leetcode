/**
 * https://leetcode.com/problems/reverse-string/
 *
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    const temp: string = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }
}

describe("reverse string", () => {
  test("#1", () => {
    const hello = ["h", "e", "l", "l", "o"];
    reverseString(hello);
    expect(hello).toEqual(["o", "l", "l", "e", "h"]);
  });
  test("#1", () => {
    const hannah = ["H", "a", "n", "n", "a", "h"];
    reverseString(hannah);
    expect(hannah).toEqual(["h", "a", "n", "n", "a", "H"]);
  });
});
