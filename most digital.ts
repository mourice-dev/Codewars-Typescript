// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

export class Kata {
  static findLongest(array: number[]): number {
    if (array) {
      return array.reduce((max, curr) => {
        const maxlength = Math.abs(max).toString().length;
        const currlength = Math.abs(curr).toString().length;
        return currlength > maxlength ? max : curr;
      });
    } else {
      throw new Error("The method or operation is not implemented.");
    }
  }
}
console.log(Kata.findLongest([1, 10, 100]));