/** @format */
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

export function bmi(weight: number, height: number) {
  // TODO: implement this method
  var bmi = weight / Math.pow(height, 2);
  if (bmi <= 18.5) return "Underweight";
  else if (bmi <= 25.0) return "Normal";
  else if (bmi <= 30.0) return "Overweight";
  else if (bmi > 30) return "Obese";
  else throw new Error("The method or operation is not implemented.");
}
console.log(bmi(50, 1.8));

// interface  mm   {
//     n: number;
// }
// type nm = {
//     n: number;
// }
