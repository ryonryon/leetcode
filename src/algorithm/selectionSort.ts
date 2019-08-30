function selectionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    const smallestIndex = findSmallestIndex(arr.slice(i)) + i;
    if (arr[smallestIndex] < arr[i]) {
      swap(arr, i, smallestIndex);
    }
  }
}

function findSmallestIndex(arr: number[]): number {
  let smallestIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[smallestIndex]) {
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

function swap(arr: number[], index1: number, index2: number): void {
  const temp: number = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

describe("selection sort", () => {
  test("#1", () => {
    const arr: number[] = [1, 3, 2];

    selectionSort(arr);

    expect(arr).toEqual([1, 2, 3]);
  });
  test("#2", () => {
    const arr: number[] = [0];

    selectionSort(arr);

    expect(arr).toEqual([0]);
  });
});
