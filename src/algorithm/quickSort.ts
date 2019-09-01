function quickSort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }

  const pivot: number = arr[getRandomInt(arr.length - 1)];
  const less = arr.filter(val => val <= pivot);
  const greater = arr.filter(val => pivot < val);

  return [pivot].concat(quickSort(less)).concat(quickSort(greater));
}

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

describe("quick sort", () => {
  test("#1", () => {
    const arr: number[] = [1, 3, 2];

    quickSort(arr);

    expect(arr).toEqual([1, 2, 3]);
  });
  test("#2", () => {
    const arr: number[] = [0];

    quickSort(arr);

    expect(arr).toEqual([0]);
  });
});
