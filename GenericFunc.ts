// /** @format */

// function returnRandomNumber<T>(items: T[]): T {
//   let randoms = Math.floor(Math.random() * items.length);
//   return items[randoms];
// }

// let numbers = ["ns", "ma,", "ri"];
// let num = returnRandomNumber<string>(numbers);
// console.log(num);


function merge<U extends object, T extends object>(obj1: U, obj2: T): U & T {
    return {
        ...obj1, ...obj2
    }
}

let result = merge({ name: "John" }, { jobTitle: "Frontend Developer" });

console.log(result);


function prop<U, T extends keyof U>(obj: U, k: T)  {
    return obj[k];
}

// function prop<T, K extends keyof T>(obj: T, key: K) {
//     return obj[key];
// }
let str = prop({ name: 'John' }, 'name');
console.log(str);