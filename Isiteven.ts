/** @format */

// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

export const testEven = (n: number): boolean => {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(testEven(0.5));
console.log(testEven(0), true, "testEven for 0");
console.log(testEven(0.5), false, "testEven for 0.5");
console.log(testEven(1), false, "testEven for 1");
console.log(testEven(2), true, "testEven for 2");
console.log(testEven(-4), true, "testEven for 2");
console.log(testEven(15), false, "testEven for 15");
console.log(testEven(20), true, "testEven for 20");
console.log(testEven(220), true, "testEven for 220");
console.log(testEven(222222221), false, "testEven for 222222221");
console.log(testEven(500000000000), true, "testEven for 500000000000");
