// https://projecteuler.net/problem=10
// find the sum of all primes below 2 million



function sumOfPrimesNumber (upperLimit) {
  let sum = 0;

  for (let i = 2; i <= upperLimit; i++) {
    if (checkPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

function checkPrime (number) {
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i == 0) {
      return false;
    }
  }

  return true;
}

console.log(sumOfPrimesNumber(2000000)); // 143042032116