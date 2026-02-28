/** @format */
type alphanumeric = string | number;

// let a: alphanumeric = 1;
// let b: alphanumeric = 2;

function add(a: alphanumeric, b: alphanumeric): number | string {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }

    if(typeof a === 'string' && typeof b === 'string') {
        return a.concat(b)
    }
    
    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');

}

console.log(add(1, 2));