/**
 * @param {number} num
 * @return {boolean}
 */

function isPerfectSquare(num: number): boolean {
  // use binary search to find
  let i = 0;
  while (true) {
    let mid: number = (num - i) / 2 + i;
    if (Math.pow(mid, 2) === num) {
      return true;
    } else if (Math.pow(mid, 2) < num) {
    }
  }

  return false;
}

describe("is perfect square", () => {
  test("#1", () => {
    expect(isPerfectSquare(9)).toBe(true);
  });
  test("#2", () => {
    expect(isPerfectSquare(16)).toBe(true);
  });
  test("#3", () => {
    expect(isPerfectSquare(14)).toBe(false);
  });
});
