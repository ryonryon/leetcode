function robSecond(nums: number[]): number {
  if (nums.length === 0) return 0;

  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = dp[i - 2] + nums[i] < dp[i - 1] ? dp[i - 1] : dp[i - 2] + nums[i];
  }

  return dp[dp.length - 1];
}

function robRec(nums: number[]): number {
  const dp = new Map([[-2, 0], [-1, 0]]);

  function _helper(n: number): number {
    if (!dp.has(n))
      dp.set(n, Math.max(_helper(n - 2) + nums[n], _helper(n - 1)));

    return dp.get(n)!;
  }

  return _helper(nums.length - 1);
}

function robBottomUp(nums: number[]): number {
  let beforePrevious = 0;
  let previous = 0;
  let current = 0;

  for (let i = 0; i < nums.length; i++) {
    current = Math.max(previous, beforePrevious + nums[i]);
    beforePrevious = previous;
    previous = current;
  }

  return current;
}

describe("robSecond", () => {
  test("#1", () => {
    expect(robSecond([2, 10, 14, 8, 1])).toBe(18);
  });
  test("#2", () => {
    expect(robSecond([2, 5, 1, 3, 6, 2, 4])).toBe(15);
  });

  test("#rec1", () => {
    expect(robRec([2, 10, 14, 8, 1])).toBe(18);
  });
  test("#rec2", () => {
    expect(robRec([2, 5, 1, 3, 6, 2, 4])).toBe(15);
  });
  test("#rec3", () => {
    expect(robRec([0])).toBe(0);
  });
  test("#rec4", () => {
    expect(robRec([0, 0])).toBe(0);
  });
  test("#rec5", () => {
    expect(robRec([])).toBe(0);
  });

  test("#BottomUp1", () => {
    expect(robBottomUp([2, 10, 14, 8, 1])).toBe(18);
  });
  test("#BottomUp2", () => {
    expect(robBottomUp([2, 5, 1, 3, 6, 2, 4])).toBe(15);
  });
  test("#BottomUp3", () => {
    expect(robBottomUp([0])).toBe(0);
  });
  test("#BottomUp4", () => {
    expect(robBottomUp([0, 0])).toBe(0);
  });
  test("#BottomUp5", () => {
    expect(robBottomUp([])).toBe(0);
  });
});
