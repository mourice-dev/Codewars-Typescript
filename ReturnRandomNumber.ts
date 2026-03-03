/** @format */
function returnRandomNumber(items: number[]) : number[] {
    let randoms =
        Math.floor(Math.random() * items.length);
    return items[randoms];
}
let numbers = [1, 2, 3, 9, 5, 4];
console.log(returnRandomNumber(numbers))