/** @format */
    // let x = 20,
    //   y = 10;
    
    // let result = add(x, y); 
    // console.log(result); // 👉 30
    
    // function add(a, b) {
    //   return a + b;
    // }
    
    let x = 20,
    y = 10;

let result = add(x,y); // ❌ Uncaught ReferenceError: add is not defined
console.log(result);

function add(x, y) {
    return x + y;
}