/** @format */

// return type
let add = function (x: string, y: string): number | string {
  return x.concat(y);
};
console.log(add("nshuti", "maurice"))


 // type inferring 
let num = function (x: number, y: number)  {
   return `${x} AND ${y}`;
};
console.log(num(1, 2));
