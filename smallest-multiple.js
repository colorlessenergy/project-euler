// https://www.projecteuler.net/problem=5

let found = 0;

let start = 2521; // we know 2520 is divisible by 1-10

while (!found) {
  for (let i = 1; i <= 20; i++) {
    if (start % i !== 0) {
      start += 1;
      break;
    } else if (i == 20 && start % i == 0) {
      found = start;
    }
  }
}

console.log('the number divisible 1 - 20 is ', found);