/** @format */
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string
export const fakeBin = (x: string): string => {
  // your code here
  return x
    .split("")
    .map((c) => {
      if (Number(c) < 5) {
        return "0";
      } else {
        return "1";
      }
    })
    .join("");
};
console.log(fakeBin("45385593107843568"));