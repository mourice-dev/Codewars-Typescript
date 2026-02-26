/** @format */

interface Stringfun {
  (str: string, isUpper: boolean): string;
}
 
// let formFun: Stringfun;
// formFun = (word: string, isUpper: boolean): string => {
//   return isUpper ? word.toLowerCase() : word.toUpperCase();
// };
// console.log(formFun("nshuti maurice", false));

let lowerCase: Stringfun;
lowerCase = function (str: string) {
  return str.toLowerCase();
};

console.log(lowerCase("Hi", true));