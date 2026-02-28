/** @format */
type alphanumeric = string | number;

// let a: alphanumeric = 1;
// let b: alphanumeric = 2;

function add(a: alphanumeric, b: alphanumeric): number {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }
}

console.log(add(1,2))