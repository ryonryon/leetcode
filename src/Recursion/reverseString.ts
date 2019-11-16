/**
 * https://leetcode.com/explore/learn/card/recursion-i/250/principle-of-recursion/1440/
 *
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

function swapArrData<T>(arr: T[], i: number, j: number): void {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function reverseStringSecond(s: string[]): void {
  function _helper(_s: string[], i: number, j: number): void {
    if (i === Math.floor(s.length / 2)) return;
    _helper(_s, i + 1, j - 1);
    swapArrData(_s, i, j);
  }

  _helper(s, 0, s.length - 1);
}

describe("reverseStringSecond", () => {
  test("#_1", () => {
    const str = ["t", "o", "i"];
    swapArrData(str, 0, 2);
    expect(str).toEqual(["i", "o", "t"]);
  });
  test("#_2", () => {
    const str = ["t", "o", "i"];
    swapArrData(str, 0, 1);
    expect(str).toEqual(["o", "t", "i"]);
  });
  test("#1", () => {
    const str = ["t", "o", "g", "a", "s", "h", "i"];
    reverseStringSecond(str);
    expect(str).toEqual(["i", "h", "s", "a", "g", "o", "t"]);
  });
});
