// /** @format */

// function getTotal(...numbers: number[]): number {
//   let total = 0;
//   numbers.forEach((num) => (total += num));
//   return total;
// }
// console.log(getTotal()); // 0
// console.log(getTotal(10, 20)); // 30
// console.log(getTotal(10, 20, 30)); // 60

function combine(...args: (number | string)[]): [number, string] {
  let total = 0;
  let str = "";
  args.forEach((arg) => {
    if (typeof arg === "number") {
      total += arg;
    } else if (typeof arg === "string") {
      str += arg;
    }
  });

  return [total, str];
}

const [total, str] = combine(3, "Happy", 2, 1, " New Year"); /// is tuple or distruction ?

console.log({ total });
console.log({ str });
