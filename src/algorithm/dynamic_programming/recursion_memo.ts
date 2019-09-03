function fib(n: number): number {
  if (n <= 1) {
    return 1;
  }

  if (!memoMap.has(n)) {
    memoMap.set(n, fib(n - 1) + fib(n - 2));
  }

  return memoMap.get(n)!;
}

const memoMap: Map<number, number> = new Map();
