/** @format */

// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

export function multiplicationTable(size: number) {
  const cover = [];

  for (let i = 1; i <= size; i++) {
    let block = [];
    for (let y = 1; y <= size; y++) {
      let x = i * y;
      block.push(x);
    }
    cover.push(block);
  }

  return cover;
}
console.log(multiplicationTable(3));
