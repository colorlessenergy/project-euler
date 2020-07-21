// https://projecteuler.net/problem=14


(function () {
  // n → n/2 (n is even)
  // n → 3n + 1(n is odd)

  let longestSequence = 0;
  const startingNumber = 13;
  const endNumber = 1000000;

  for (let i = startingNumber; i <= endNumber; i++) {
    collatzSequence(i);
  }

  console.log(longestSequence) // 525


  function collatzSequence(n) {
    let amountSequence = 1;
    let oneFound = false;

    while (!oneFound) {
      if (n === 1) {
        oneFound = true;
        if (longestSequence < amountSequence) {
          longestSequence = amountSequence;
        }
        return;
      }

      if (n % 2 === 0) {
        n = n / 2
      } else {
        n = 3 * n + 1
      }
      amountSequence += 1;
    }
  }
})();