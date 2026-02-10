"use strict";
/** @format */
// Numbers ending with zeros are boring.
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.noBoringZeros = noBoringZeros;
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.
// 1450   -> 145
// 960000 -> 96
// 1050   -> 105
// -1050  -> -105
// 0      -> 0
// Note: Zero should be left as it is.


function noBoringZeros(n) {
    if (n > 0) {
        var nn = n.toString().split("");
        
        while (nn[nn.length - 1 ] === "0") {
            nn.pop();
           
        }
        return Number(nn.join(""));
        
    } else {
        return 0;
            
    }
}
console.log(noBoringZeros(90600));