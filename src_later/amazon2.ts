function generalizedGCD(num: number, arr: number[]) {
  const devidableNumbers: number[] = [];
  for (let i = arr[0]; 0 < i; i--) {
    if (arr[0] % i === 0) {
      devidableNumbers.push(i);
    }
  }
  for (let i = 1; i < num; i++) {
    for (let j = 0; j < devidableNumbers.length; j++) {
      if (arr[i] % devidableNumbers[j] !== 0) {
        devidableNumbers[j] = 0;
      }
    }
  }

  for (let i = 0; i < devidableNumbers.length; i++) {
    if (devidableNumbers[i] !== 0) {
      return devidableNumbers[i];
    }
  }

  return 0;
}
describe("amazon2", () => {
  test("#1", () => {
    expect(generalizedGCD(5, [2, 4, 6, 8, 10])).toBe(2);
  });
});
