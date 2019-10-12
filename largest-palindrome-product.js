// https://www.projecteuler.net/problem=4

let number = 999;
let secondNumber = 999;
let answer = false;

while(!answer) {
  if (isPalindrome((number * secondNumber))) {
    answer = number * secondNumber;
    console.log('answer was found woo', answer)
  } else if (secondNumber == 100) {
    number = number - 1;
    secondNumber = number - 1;
  } else {
    secondNumber -= 1;
  }
}

// make it dynamic in a way that you can tell it to find the
// largest palindromic number with any amount of digits in the pair

function findLargestPalindromicNumber(digits) {
  if (typeof digits !== 'number') {
    throw new Error('You have to enter a real number');
  }

  // initialize the first number and second number
  let number = '';
  let secondNumber = '';
  let answer = false;

  for (let i = 0; i < digits; i++) {
    number += '9';
    secondNumber += '9';
  }

  number = parseInt(number);
  secondNumber = parseInt(secondNumber);

  // find the number that is a palindrome
  while (!answer) {
    if (isPalindrome((number * secondNumber))) {
      answer = number * secondNumber;
    } else if (secondNumber == 100) {
      number = number - 1;
      secondNumber = number - 1;
    } else {
      secondNumber -= 1;
    }
  }

  return answer;
}

console.log(findLargestPalindromicNumber(4))

function isPalindrome(number) {
  let reversedNumber = number.toString().split('').reverse().join('');
  return number == reversedNumber
}
  