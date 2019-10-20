// https://projecteuler.net/problem=9
// Special Pythagorean triplet

// find the 3 natural numbers that make
// these conditions true
//  a < b < c 
// a + b + c = 1000
// a^2 + b^2 = c ^ 2

let found = false;
let currentNumber = 2;
let pythagoreanTriplet = [];

while (!found) {

  for (let i = 1; i < currentNumber; i++) {
    // getting the pythagorean triplet
    let a = Math.pow(i, 2);
    let b = Math.pow(currentNumber + 1, 2);
    let c = Math.sqrt(a + b);

    // add the base numbers before they 
    // were squared

    let sum = Math.sqrt(a) + Math.sqrt(b) + c;

    // only check if it equals 1000
    // when c is a whole number

    if (sum === 1000) {
      // return the triplet that 
      // is a pythagorean triplet and equals 1000 when added
      found = true;
      pythagoreanTriplet = [Math.sqrt(a), Math.sqrt(b), c];
    }
  }
  
  currentNumber += 1;
}

console.log(pythagoreanTriplet) 
  // [200, 375, 425] 200 + 375 + 425 = 1000
