/**
 * https://leetcode.com/problems/count-primes/
 *
 * @param {number} n
 * @return {number}
 */

// function isPrime(n: number): boolean {
//   if (n <= 1) return false;
//   for (let i = 2; i * i <= n; i++) {
//     if (n % i == 0) return false;
//   }
//   return true;
// }

// function countPrimes(n: number): number {
//   let count = 0;
//   for (let i = 1; i < n; i++) {
//     if (isPrime(i)) count++;
//   }
//   return count;
// }

function countPrimes(n: number): number {
  const isPrime: boolean[] = [];
  for (let i = 2; i < n; i++) {
    isPrime[i] = true;
  }
  for (let i = 2; i * i < n; i++) {
    if (!isPrime[i]) continue;
    for (let j = i * i; j < n; j += i) {
      isPrime[j] = false;
    }
  }
  let count: number = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) count++;
  }
  return count;
}

describe("count primes", () => {
  test("#1", () => {
    expect(countPrimes(10)).toBe(4);
    // Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
  });
  test("#2", () => {
    expect(countPrimes(0)).toBe(0);
  });
  test("#3", () => {
    expect(countPrimes(1)).toBe(0);
  });
  test("#4", () => {
    expect(countPrimes(2)).toBe(0);
  });
  test("#5", () => {
    expect(countPrimes(3)).toBe(1);
  });
  test("#5", () => {
    expect(countPrimes(3)).toBe(1);
  });
});
