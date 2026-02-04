// // /** @format */

// // let massage: string = "Hello Maurice";

// // let heading = document.createElement("h1");
// // heading.textContent = massage;

// // document.body.appendChild(heading);

// // /** @format */
// // var massage = "Hello Maurice";
// // var heading = document.createElement("h1");
// // heading.textContent = massage;
// // document.body.appendChild(heading);

// interface Product{
//     id: number,
//     name: string,
//     price: number
// };

// function getProduct(id: number) : Product {
//     return {
//         id: id,
//         name: `awesome georga${id}`,
//         price: 99.5
//     }
// }

// const product = getProduct(1);

// const showProduct = (name: string, price: number) => {
//  console.log(`name ${name} and price ${price}`);
// }

// // showProduct(product.price, product.name)

// let greeting: (name: string) => string;

// greeting = function (name: string) {
//   return `Hi ${name}`;
// };

//  greeting = () {
//     console.log("Hello");
// }

// let add: (x: number, y: number) => number;

// add = function (x: number, y: number) {
//   return x + y;
// };

// let add: (a: number, b: number) => number = function (x: number, y: number) {
//   return x + y;
// };

// enum obj{
//     id: number,
//     name: string
// }

// const user: obj{
//     id:1,
//     name: "maurice"
// }
// let tupes: [number, string] = [1, "maurice"];

// enum size{
//     small="A",
//     medium = "B",
//     large ="C"
// }
// let mysize = size.medium;
// console.log(mysize);

// type employee =  {
//     id: number,
//     name: string,
//     retire: (date: Date) => void
// };

// let empolyee: employee = {
//     id: 1,
//     name: "maurice",
//     retire: (date: Date) => {
//         console.log(date);
//     }

// }
// function kgtol(weight: number | string): number {
//     if (typeof weight === "number")
//         return weight * 9.9;
//     else
//         return parseInt(weight) * 9.9;
// }
// kgtol(10);
// kgtol("10kg")

type Customer = {
  Birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { Birthday: new Date() };
}
let Customer = getCustomer(1);
console.log(Customer?.Birthday?.getFullYear());