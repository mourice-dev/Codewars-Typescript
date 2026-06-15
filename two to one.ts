/** @format */
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

export const longest = (s1: string, s2: string) => {
  // your code
  const letters = (s1 + s2).split("");
  const arr = [...new Set(letters)];
  const arrs = arr.sort().join("");
  return arrs;
};
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));