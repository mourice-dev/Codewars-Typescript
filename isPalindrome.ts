/** @format */
// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads
//  the same backwards as forwards, such as madam or racecar.

export function isPalindrome(x: string): boolean {
  const normalize = x.toLowerCase();
  const reversing = normalize.split("").reverse().join("");
  return normalize === reversing;
}
console.log(isPalindrome("Abba"));
console.log(isPalindrome("hello"));