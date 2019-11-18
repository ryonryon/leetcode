function getNonDecNum(num: number): number {}

function helper(num: number) {
  if (num === 0) return;
}

describe("getNonDecNum", () => {
  test("#1", () => {
    expect(getNonDecNum(0)).toBe(0);
  });
  test("#2", () => {
    expect(getNonDecNum(1)).toBe(10);
  });
  test("#3", () => {
    expect(getNonDecNum(2)).toBe(55);
  });
  test("#4", () => {
    expect(getNonDecNum(3)).toBe(220);
  });
});
