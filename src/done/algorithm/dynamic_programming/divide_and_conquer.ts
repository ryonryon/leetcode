function fibDivideAndConquer(n: number): number {
  if (n === 0) {
    return 1;
  }

  let fib1: number = 1;
  let fib2: number = 1;
  let fib3: number = 1;

  for (let i = 0; i < n; i++) {
    fib3 = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib3;
  }
  return fib2;
}
