/**
 * https://leetcode.com/problems/add-digits/
 *
 * @param {number} num
 * @return {number}
 */

function addDigits(num: number): number {
  if (num < 10) return num;

  let addedDigits: number = 0;
  `${num}`.split("").forEach(element => {
    addedDigits += Number(element)!;
  });

  return addDigits(addedDigits);
}

describe("add digits", () => {
  test("#1", () => {
    expect(addDigits(38)).toBe(2);
  });
});
