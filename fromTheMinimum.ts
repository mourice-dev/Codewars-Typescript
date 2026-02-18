// Task
// Given a list of digits, return the smallest number that could be formed from these digits,
//  using the digits only once (ignore duplicates). Only positive integers in the range of 1 to 9 
// will be passed to the function.

// Examples
// [1, 3, 1] ==> 13
// [5, 7, 5, 9, 7] ==> 579
// [1, 9, 3, 1, 7, 4, 6, 6, 7]  ==> 134679
export const minValue = (values: number[]) : number => {
  const isPositive :boolean = values.every((index) => index > 0);
  if (isPositive === false) {
      console.log("negative number they aren't allowed");
      return 0;
  } else {
    let sets  = new Set(values);
    let arr : number[] = [...sets];

    let sorts : number[] = arr.sort((a, b) => a - b);
    //  Math.min(a), Math.max(a));
    return Number(sorts.join(""));
  }
};

console.log(minValue([1, 3, 1]));