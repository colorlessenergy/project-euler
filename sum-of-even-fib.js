// Even Fibonacci numbers - https://projecteuler.net/problem=2
// given a positon find the sum of even numbers in the fibnoacci sequence to that position

function FibonacciSumEven (n) {
  let start = [1, 2];
  let sumOfEven = 2;

  for (let i = start.length-1; i < n-2; i++) {
    let nextNumb = start[i] + start[i-1];
    start.push(nextNumb);
    if (nextNumb % 2 === 0) {
      sumOfEven += nextNumb;
    }
  }

  return sumOfEven;
}

console.log(FibonacciSumEven(10)); // 44