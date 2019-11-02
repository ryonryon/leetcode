/**
 * https://leetcode.com/problems/fizz-buzz/
 *
 * @param {number} n
 * @return {string[]}
 */

function fizzBuzz(n: number): string[] {
  const arr: string[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      arr.push("FizzBuzz");
      continue;
    } else if (i % 3 == 0) {
      arr.push("Fizz");
      continue;
    } else if (i % 5 == 0) {
      arr.push("Buzz");
      continue;
    }

    arr.push(String(i));
  }

  return arr;
}

describe("fizz buzz", () => {
  test("#1", () => {
    expect(fizzBuzz(15)).toEqual([
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz"
    ]);
  });
});
