function towDArrayDs(arr: number[][]) {
  function getSumOfHourglass(y: number, x: number) {
    return (
      arr[y][x] +
      arr[y][x + 1] +
      arr[y][x + 2] +
      arr[y + 1][x + 1] +
      arr[y + 2][x] +
      arr[y + 2][x + 1] +
      arr[y + 2][x + 2]
    );
  }

  let maxHourglassSum = -Infinity;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const newHourglassSum = getSumOfHourglass(i, j);
      if (maxHourglassSum < newHourglassSum) maxHourglassSum = newHourglassSum;
    }
  }

  return maxHourglassSum;
}

describe("towDArrayDs", () => {
  test("#1", () => {
    expect(
      towDArrayDs([
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0]
      ])
    ).toBe(19);
  });
});
