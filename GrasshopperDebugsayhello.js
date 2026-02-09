"use strict";
// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHello = sayHello;
// Example output:
// Hello, Mr. Spock/** @format */
function sayHello(name) {
    return "Hello, ".concat(name);
}
console.log(sayHello("Maurice"));
