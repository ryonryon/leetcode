/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

function myPow(x: number, n: number): number {
  if (x === 0) return 0;
  if (n === 0) return 1;

  if (n < 0) {
    x = 1 / x;
    n = -1 * n;
  }

  let ans = 1;
  let i = 0;
  while (i < n) {
    ans = ans * x;
    i++;
  }

  return ans;
}

function myPowRec(x: number, n: number): number {
  if (n === 0) return 1;

  if (n < 0) {
    x = 1 / x;
    n = -1 * n;
  }

  return n % 2 === 1
    ? x * myPowRec(x * x, Math.floor(n / 2))
    : myPowRec(x * x, Math.floor(n / 2));
}

describe("myPow", () => {
  test("#1", () => {
    expect(myPow(2.0, 10)).toBe(1024.0);
  });
  test("#2", () => {
    expect(myPow(2.0, -2)).toBe(0.25);
  });
  test("#3", () => {
    expect(myPowRec(2.0, 10)).toBe(1024.0);
  });
  test("#4", () => {
    expect(myPowRec(2.0, -2)).toBe(0.25);
  });
});
