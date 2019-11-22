/**
 * https://leetcode.com/problems/permutations/
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums: number[]): number[][] {
  function _helper() {
    for (let i = 0; i < nums.length; i++) {
      if (!temp.includes(nums[i])) {
        temp.push(nums[i]);
        if (temp.length === nums.length) {
          ans.push([...temp]);
        } else if (temp.length < nums.length) {
          _helper();
        }
        temp.pop();
      }
    }
  }

  const ans: number[][] = [];
  const temp: number[] = [];
  _helper();
  return ans;
}

describe("permute", () => {
  test("#1", () => {
    expect(permute([1, 2, 3])).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1]
    ]);
  });
});
