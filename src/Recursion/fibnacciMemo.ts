function fibnacciMemo(num: number): number {
  const memo = new Map<number, number>();
  function _helper(_num: number): number {
    if (memo.has(_num)) return memo.get(_num)!;
    if (_num < 2) return _num;

    memo.set(_num, _helper(_num - 2) + _helper(_num - 1));
    return memo.get(_num)!;
  }
  return _helper(num);
}

describe("fibnacciMemo", () => {
  test("#1", () => {
    expect(fibnacciMemo(4)).toBe(3);
  });
});
