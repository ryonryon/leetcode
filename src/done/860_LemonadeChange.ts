/**
 * @param {number[]} bills
 * @return {boolean}
 */

function lemonadeChange(bills: number[]): boolean {
  if (bills.length < 1) return true;
  let numOfFiveDoller = 0;
  let numOfTenDoller = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      numOfFiveDoller++;
    } else if (bills[i] === 10) {
      numOfFiveDoller--;
      numOfTenDoller++;
    } else if (bills[i] === 20) {
      if (0 < numOfTenDoller) {
        numOfTenDoller--;
        numOfFiveDoller--;
      } else {
        numOfFiveDoller = numOfFiveDoller - 3;
      }
    }
    if (numOfFiveDoller < 0) return false;
  }

  return true;
}

describe("lemonadeChange", () => {
  test("#1", () => {
    expect(lemonadeChange([5, 5, 5, 10, 20])).toBe(true);
  });
  test("#2", () => {
    expect(lemonadeChange([])).toBe(true);
  });
  test("#3", () => {
    expect(lemonadeChange([10])).toBe(false);
  });
  test("#4", () => {
    expect(lemonadeChange([20])).toBe(false);
  });
  test("#5", () => {
    expect(lemonadeChange([5])).toBe(true);
  });
  test("#6", () => {
    expect(lemonadeChange([5, 5, 5, 5, 20, 20, 5, 5, 20, 5])).toBe(false);
  });
});
