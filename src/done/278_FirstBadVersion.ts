/**
 * https://leetcode.com/problems/first-bad-version/
 * https://leetcode.com/explore/learn/card/binary-search/126/template-ii/937/
 *
 * @param {integer} n Total versions
 * @return {integer} The first bad version
 */
function getfirstBadVersion(n: number, isBadVersion: Function): number {
  let [left, right] = [1, n];
  let oldestBadVersion = 1;

  while (left < right) {
    const mid = Math.floor((right - left) / 2) + left;

    if (isBadVersion(mid)) {
      right = mid;
    } else {
      left = mid;
    }
    if (right - left === 1) {
      oldestBadVersion = isBadVersion(left) ? left : right;
      break;
    }
  }

  return oldestBadVersion;
}

describe("getfirstBadVersion", () => {
  test("#1", () => {
    const version = [false, false, false, false, true, true];

    function _isBadVersion(n: number): boolean {
      return version[n];
    }

    expect(getfirstBadVersion(5, _isBadVersion)).toBe(4);
  });
  test("#2", () => {
    const version = [false, true];

    function _isBadVersion(n: number): boolean {
      return version[n];
    }

    expect(getfirstBadVersion(1, _isBadVersion)).toBe(1);
  });
  test("#3", () => {
    const version = [false, true, true, true];

    function _isBadVersion(n: number): boolean {
      return version[n];
    }

    expect(getfirstBadVersion(3, _isBadVersion)).toBe(1);
  });
});
