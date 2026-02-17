/** @format */

function restParameter(...nums: number[]) : number {
    let result: number = 0;
    for (let i = 0; i < nums.length; i++){
        result += nums[i]!;

    }
    return result
}
console.log(restParameter(1, 2, 3, 4, 5, +true));