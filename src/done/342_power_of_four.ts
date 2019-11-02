/**
 * https://leetcode.com/problems/power-of-four/
 *
 * @param {number} num
 * @return {boolean}
 */

function isPowerOfFour(num: number): boolean {
  return (Math.log(num) / Math.log(4)) % 1 === 0;
  //   if (num === 1) {
  //     return true;
  //   }
  //   while (4 < num) {
  //     num = num / 4;
  //   }
  //   return num === 4 ? true : false;
}
describe("is power of four", () => {
  test("#1", () => {
    expect(isPowerOfFour(16)).toBe(true);
  });
  test("#2", () => {
    expect(isPowerOfFour(1)).toBe(true);
  });
  test("#3", () => {
    expect(isPowerOfFour(0)).toBe(false);
  });
});
