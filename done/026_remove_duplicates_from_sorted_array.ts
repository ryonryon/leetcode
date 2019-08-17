// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

function removeDuplicates(nums: number[]): number {
  removeDuplicatesHelper(nums, 0);

  return nums.length;
}

function removeDuplicatesHelper(numberArr: number[], soFar: number) {
  if (numberArr.length == soFar) {
    return;
  }

  if (numberArr[soFar] == numberArr[soFar + 1]) {
    for (let i = soFar; i < numberArr.length - 1; i++) {
      numberArr[i] = numberArr[i + 1];
    }
    numberArr.pop();
    soFar--;
  }

  removeDuplicatesHelper(numberArr, soFar + 1);
}

describe("Remove Duplicates", () => {
  test("#1", () => {
    expect(removeDuplicates([1, 1, 3, 4])).toBe(3);
  });

  test("#2", () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
  });
});
