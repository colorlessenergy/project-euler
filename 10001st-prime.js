// find prime number in 10001 position

let primeNumbers = [];

function primeNumber (numberPosition) {

  if (primeNumbers[numberPosition]) {
    return primeNumbers[numberPosition];
  }
  
  let number = 1;
  while(primeNumbers.length !== numberPosition) {
    let checkPrime = isPrime(number);

    if (checkPrime) {
      primeNumbers.push(number);
    }

    number++;
  }

  return primeNumbers[numberPosition-1];
}

function isPrime (number) {
  for (let i = 2; i < Math.sqrt(number) + 1; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(primeNumber(10001)); // 104743