/**
 * @param {number[]} nums
 * @return {boolean}
 */

function canJump(nums: number[]): boolean {
  if (nums.length < 1) return true;
  const gd = new Array(nums.length).fill(false);
  gd[0] = true;

  for (let i = 0; i < nums.length; i++) {
    if (gd[i] === false) break;
    for (let j = i; j <= i + nums[i]; j++) {
      gd[j] = true;
    }
  }

  return gd[nums.length - 1];
}

describe("canJump", () => {
  test("#1", () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true);
  });
  test("#1", () => {
    expect(canJump([3, 2, 1, 0, 4])).toBe(false);
  });
});
