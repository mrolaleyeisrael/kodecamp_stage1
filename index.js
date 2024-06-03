

function fibonacciGenerator() {
  const cache = {};

  function getFibonacci(n) {
    if (cache[n] !== undefined) {
      console.log("fibonacci for ", + n + " returned from cache")
      return cache[n];
    }

    if (n === 0) {
      return 0;
    }

    if (n === 1) {
      return 1;
    }

    const result = getFibonacci(n - 1) + getFibonacci(n - 2);
    
    console.log(result)
    cache[n] = result;

    return result;
  }

  function* generateFibonacci(start, end) {
    for (let i = start; i <= end; i++) {
      yield getFibonacci(i);
    }
  }

  return generateFibonacci;
}

const start_index = 5;
const end_index = 6;

const fibGenFunc = fibonacciGenerator();

const fibSequence = fibGenFunc(start_index, end_index);
let outcome = []

for (const num of fibSequence) {
  outcome.push(num);
}
console.log(outcome)