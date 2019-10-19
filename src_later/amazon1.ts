function cellCompete(states: number[], days: number) {
  let lastDayStates = Array.from(states);
  for (var i = 0; i < days; i++) {
    for (var j = 0; j < 8; j++) {
      states[j] = getStates(lastDayStates, j);
    }
    lastDayStates = Array.from(states);
  }

  return states;
}

function getStates(states: number[], i: number): number {
  if (i === 0 && states[1] === 0) {
    return 0;
  }
  if (i === states.length - 1 && states[i - 1] === 0) {
    return 0;
  }
  if (states[i - 1] === states[i + 1]) {
    return 0;
  }
  return 1;
}

describe("amazon1", () => {
  test("#1", () => {
    expect(cellCompete([1, 0, 0, 0, 0, 1, 0, 0], 1)).toEqual([
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      0
    ]);
  });
  test("#2", () => {
    expect(cellCompete([1, 1, 1, 0, 1, 1, 1, 1], 2)).toEqual([
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      0
    ]);
  });
});
