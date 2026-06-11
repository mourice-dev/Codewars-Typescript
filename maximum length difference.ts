// You are given two arrays a1 and a2 of strings. Each string is composed with letters 
// from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13/** @format */

export const mxdiflg = (a1: string[], a2: string[]): number => {
  // 1. Guard clause: If either array is empty, return -1
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }

  // 2. Map the arrays to their string lengths
  const len1 = a1.map(str => str.length);
  const len2 = a2.map(str => str.length);

  // 3. Find the min and max lengths for both arrays
  const max1 = Math.max(...len1);
  const min1 = Math.min(...len1);
  const max2 = Math.max(...len2);
  const min2 = Math.min(...len2);

  // 4. Return the maximum absolute difference possible
  return Math.max(Math.abs(max1 - min2), Math.abs(max2 - min1));
};

// Testing the example
console.log(mxdiflg(
  ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"],
  ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
)); // Output: 13