"use strict";
// /** @format */
// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumArray = sumArray;
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.
// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
function sumArray(array) {
    //   return array?.length === 0  ? 0 : array
    if (array) {
        var sorted = array.sort(function (a, b) { return a - b; });
        var rel = sorted.slice(1, -1);
        return rel.reduce(function (a, b) { return a + b; });
    }
    else {
        return 0;
    }
}
console.log(sumArray([6, 0, 1, 10, 10]));
