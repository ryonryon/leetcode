/**
 * https://leetcode.com/problems/ugly-number/
 *
 * @param {number} num
 * @return {boolean}
 */

function isUgly(num: number): boolean {
  if (num <= 0) return false;
  if (num <= 5) return true;

  while (num % 2 === 0) {
    num = num / 2;
  }
  while (num % 3 === 0) {
    num = num / 3;
  }
  while (num % 5 === 0) {
    num = num / 5;
  }
  return num === 1;
}

// function isUgly(num: number): boolean {
//   return isUglyHelper(num, 1);
// }

// function isUglyHelper(num: number, soFar: number): boolean {
//   if (soFar === num) {
//     return true;
//   } else if (num < soFar) {
//     return false;
//   }

//   if (
//     isUglyHelper(num, soFar * 2) ||
//     isUglyHelper(num, soFar * 3) ||
//     isUglyHelper(num, soFar * 5)
//   )
//     return true;
//   return false;
// }

describe("is ugly", () => {
  test("#1", () => {
    expect(isUgly(6)).toBe(true);
  });
  test("#2", () => {
    expect(isUgly(8)).toBe(true);
  });
  test("#3", () => {
    expect(isUgly(14)).toBe(false);
  });
});
