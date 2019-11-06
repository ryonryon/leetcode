function MinWindowSubstring(strArr: string[]) {
  function _isSameSize(
    mapA: Map<string, number>,
    mapB: Map<string, number>
  ): boolean {
    if (mapA.size !== mapB.size) return false;
    for (let [key, val] of mapA) {
      if (!mapB.has(key)) return false;
      if (val > mapB.get(key)!) return false;
    }
    return true;
  }

  function _getSubstr(start: number): string | null {
    const _map = new Map();
    for (let i = start; i < strArr[0].length; i++) {
      const target = strArr[0].charAt(i);
      if (map.has(target)) {
        _map.has(target)
          ? _map.set(target, map.get(target) + 1)
          : _map.set(target, 1);
        if (_isSameSize(map, _map)) return strArr[0].substring(start, i + 1);
      }
    }
    return null;
  }

  let smallestLengthsubstr = strArr[0];
  const map = new Map();
  for (let i = 0; i < strArr[1].length; i++)
    map.has(strArr[1].charAt(i))
      ? map.set(strArr[1].charAt(i), map.get(strArr[1].charAt(i)) + 1)
      : map.set(strArr[1].charAt(i), 1);

  for (let i = 0; i < strArr[0].length; i++) {
    const nChar = strArr[0].charAt(i);
    if (map.has(nChar)) {
      const mayBeSmallestSubstr = _getSubstr(i);

      if (
        mayBeSmallestSubstr &&
        mayBeSmallestSubstr.length < smallestLengthsubstr.length
      )
        smallestLengthsubstr = mayBeSmallestSubstr;
    }
  }

  return smallestLengthsubstr;
}

describe("SumMultiplier", () => {
  test("#_1", () => {
    const subStr = "ahffaksfajeeubsne".substring(2, 11);
    expect(subStr).toEqual("ffaksfaje");
  });
  test("#1", () => {
    expect(MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"])).toBe("aksfaje");
  });
});
