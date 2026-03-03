/** @format */

function returnRandomNumber<T>(items: T[]): T {
  let randoms = Math.floor(Math.random() * items.length);
  return items[randoms];
}

let numbers = ["ns", "ma,", "ri"];
let num = returnRandomNumber<string>(numbers);
console.log(num);

function merge<U, T>(obj1: U, obj2: T): U & T {
    return {
        ...obj1, ...obj2
    }
}

let result = merge({ name: "John" }, { jobTitle: "Frontend Developer" });

console.log(result);