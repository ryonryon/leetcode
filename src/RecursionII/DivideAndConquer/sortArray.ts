/**
 * @param {number[]} nums
 * @return {number[]}
 */

function sortArray(nums: number[]): number[] {
  if (nums.length <= 1) return nums;

  const pivot = Math.floor(nums.length / 2);

  const left = sortArray(nums.slice(0, pivot));
  const right = sortArray(nums.slice(pivot));

  return mergeSecond(left, right);
}

function mergeSecond(leftArr: number[], rightArr: number[]): number[] {
  const mergedArr: number[] = [];
  let [indexL, indexR] = [0, 0];
  while (indexL < leftArr.length && indexR < rightArr.length) {
    if (leftArr[indexL] < rightArr[indexR]) {
      mergedArr.push(leftArr[indexL]);
      indexL++;
    } else {
      mergedArr.push(rightArr[indexR]);
      indexR++;
    }
  }
  if (indexL < leftArr.length) mergedArr.push(...leftArr.slice(indexL));
  if (indexR < rightArr.length) mergedArr.push(...rightArr.slice(indexR));

  return mergedArr;
}

describe("sortArray", () => {
  test("_1", () => {
    expect(mergeSecond([1, 3, 8], [2, 9, 11])).toEqual([1, 2, 3, 8, 9, 11]);
  });
  test("1", () => {
    expect(sortArray([1, 5, 3, 2, 8, 7, 6, 4])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ]);
  });
});
