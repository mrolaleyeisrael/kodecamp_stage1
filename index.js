function fibonacciGenerator() {
  const cache = {};

  function getFibonacci(n) {
    if (cache[n] !== undefined) {
      return cache[n];
    }

    if (n === 0) {
      yield 0;
    }
    if (n === 1) {
      yield 1;
    }

    const result = getFibonacci(n - 1) + getFibonacci(n - 2);
    cache[n] = result;
    yield result;
  }

  function* generateFibonacci(start, end) {
    for (let i = start; i <= end; i++) {
      yield getFibonacci(i);
    }
  }

  return generateFibonacci;
}

const start_index = 5;
const end_index = 15;

const fibGenFunc = fibonacciGenerator();

const fibSequence = fibGenFunc(start_index, end_index);

for (const num of fibSequence) {
  console.log(num);
}
