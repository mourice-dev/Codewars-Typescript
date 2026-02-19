/** @format */
function add(a :number, b :number) : number;
function add(a :string, b :string ) : string;
function add(a :any , b :any ): any {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
   if (typeof a === "number" && typeof b === "number") {
     return a + b;
    }  
    throw new Error("invaled");
};

console.log(add(10, 20));  // 30
console.log(add('Hello, ', 'world!'));  // 'Hello, world!

