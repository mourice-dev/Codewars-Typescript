/** @format */

function noBoringZeros(n: number): number {
  if (n === 0) return 0;

  let isNegative: boolean = n < 0; // check sign
  let num = Math.abs(n); // remove sign

  let reversed = num.toString().split("").reverse().join("");
  let removedZeros = Number(reversed);
  let final = removedZeros.toString().split("").reverse().join("");

  return isNegative ? -Number(final) : Number(final);
}

console.log(noBoringZeros(-1050)); // -105
console.log(noBoringZeros(-105000)); // -105
console.log(noBoringZeros(9600)); // 96
