// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

/** @format */
export function sumStr(a: string, b: string): string {
  if (a === "" && b === "") {
    return "0";
  } else if (a === "") {
    return String(b);
  } else if (b === "") {
    return String(a);
  } else {
    var n1 = parseInt(a, 10);
    var n2 = parseInt(b, 10);
    var total = n1 + n2;
    return String(total);
  }
}
console.log(sumStr("4", "5"));