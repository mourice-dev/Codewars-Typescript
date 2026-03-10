/** @format */
function reversing(str: string) {
    const reversChar = str.split(" ").map((char) => {
        let rever =  char.split("").reverse().join("")
     return rever.charAt(0).toLocaleUpperCase() + rever.slice(1);
    }).join(" ")

    return reversChar;
}
console.log(reversing("when you have object and swap key to values"));