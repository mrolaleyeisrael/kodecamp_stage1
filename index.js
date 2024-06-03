// const fibonacciGen = () => {

//   const cache = new Map()
//   return function* generateFibonacci(...args) {
//     console.log(args)

//   }


// }
// fibonacciGen(2)

function fibonacciGenerator() {
  const cache = {};

  function getFibonacci(n) {
    if (cache[n] !== undefined) {
      return cache[n];
    }

    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }

    const result = getFibonacci(n - 1) + getFibonacci(n - 2);
    cache[n] = result;
    return result;
  }

// CACHING MECHANISM

//   1. Implement a cache within the closure to store previously calculated Fibonacci numbers.
// 2. The generator function first checks the cache for the requested number.

// 3. If the number is not cached, it calculates it using the traditional recursive approach and stores it in the cache for future use.

// 4. This optimization improves performance for repeated requests of the same Fibonacci number.


  function* generateFibonacci(start, end) {
    for (let i = start; i <= end; i++) {
      yield getFibonacci(i);
    }
  }

  return generateFibonacci;
}

const start_index = 5;
const end_index = 10;

const fibGenFunc = fibonacciGenerator();

const fibSequence = fibGenFunc(start_index, end_index);
let outcome = []

for (const num of fibSequence) {
  outcome.push(num);
}

console.log(outcome)

