/** @format */

// const org = { a: 1, b: 2, c: 3 };

// const swapp = Object.fromEntries(Object.entries(org).Map(([key, value]) => [value, key]))

// console.log(swapp)

const original = { a: 1, b: 2, c: 3 };

const flipped = Object.fromEntries(
  Object.entries(original).map(([key, value]) => [value, key])
);

console.log(flipped); 
// Output: { 1: "a", 2: "b", 3: "c" }
