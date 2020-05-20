// https://projecteuler.net/problem=12

function findFirstNumberOfDivisorsTriangleNumber(numOfDivisors) {
  let positionInTriangularNumber = 0;
  let found = false;

  while (!found) {
    positionInTriangularNumber += 1;

    let currentDivisorsForTriangularNumber = allDivisorsForNumber(triangularNumber(positionInTriangularNumber));

    // have to find the first number greater than the numOfDivisors
    if (currentDivisorsForTriangularNumber >= numOfDivisors) {
      found = true;
      return triangularNumber(positionInTriangularNumber);
    }
  }
}

function triangularNumber (position) {
  // triangle number formula
  // n*(n+1)/2
  // n is the position

  return position * (position + 1) / 2;
}


function allDivisorsForNumber(number) {
  let numberOfDivisors = 0;
  for (let i = 0; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      if (number / i === i) {
        numberOfDivisors += 1;
      } else {
        numberOfDivisors += 2;
      }
    }
  }

  return numberOfDivisors;
}

console.log(findFirstNumberOfDivisorsTriangleNumber(500)); // 76576500
