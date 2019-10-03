// find the largest prime factor of 600851475143

function largestPrimeFactor (n) {
  // init the greastest prime factor with lowest one
  let maxPrime = -1;

  while (n % 2 === 0) {
    maxPrime = 2;

    n /= 2;
  }

  for (let i = 3; i <= Math.sqrt(n); i+=2) {
    while (n % i === 0) {
      maxPrime = i;
      
      n = n / i;
    }
  }

  if (n > 2) {
    maxPrime = n;
  }

  return maxPrime;
}

console.log(largestPrimeFactor(600851475143));