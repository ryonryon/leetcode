/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight(n: number): number {
  const n1 = `${n.toString(2)}`.split("").filter(n => {
    return n === "1";
  });

  return n1.length;
}

describe("hamming weight", () => {
  test("#1", () => {
    expect(hammingWeight(0o00000000000000000000000000001011)).toBe(3);
  });
});
