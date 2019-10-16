// https://www.projecteuler.net/problem=6

// find the difference between the sum of first 100 natural numbers squared
// and the sum of every number squared for first 100 natural numbers 

let difference = 0;
// sum of first 100 natural numbers squared
let sumOfSquaredNumbers = 0;

// the sum of every number squared for first 100 natural numbers
let sumOfNumbersSquared = 0;

for (let i = 1; i <= 100; i++) {
  sumOfSquaredNumbers += Math.pow(i, 2);
  sumOfNumbersSquared += i;
}

difference = Math.pow(sumOfNumbersSquared, 2) - sumOfSquaredNumbers;

console.log(difference); // 25164150

// lets make this into a function so the user can change the amount
// of natural numbers used

function SumSquareDifference (naturalNumber) {
  // sum of first 100 natural numbers squared
  let sumOfSquaredNumbers = 0;

  // the sum of every number squared for first 100 natural numbers
  let sumOfNumbersSquared = 0;

  for (let i = 1; i <= naturalNumber; i++) {
    sumOfSquaredNumbers += Math.pow(i, 2);
    sumOfNumbersSquared += i;
  }

  return Math.pow(sumOfNumbersSquared, 2) - sumOfSquaredNumbers;
}

console.log(SumSquareDifference(100));