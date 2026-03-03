/** @format */

function returnRandomNumber<T>(items: T[]): T {

  let randoms = Math.floor(Math.random() * items.length);
  return items[randoms];
}

let numbers = ["ns","ma,","ri"];
let num = returnRandomNumber<string>(numbers);
console.log(num);