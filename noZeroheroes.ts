/** @format */
// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450   -> 145
// 960000 -> 96
// 1050   -> 105
// -1050  -> -105
// 0      -> 0
// Note: Zero should be left as it is.

// export function noBoringZeros(n: number) {
//   var nn = n.toString().split("");
//   const nx: number[] = nn.map(Number);
//   while (nx.slice(-1).values === "0") {
//      nn.splice(0, -1);
//   }

//   return nx;
// }
// console.log(noBoringZeros(1450));

export function noBoringZeros(n: number) {
  if (n === 0) return 0;
  let nn = n.toString().split("");

  while (nn[nn.length - 1] === "0") {
    nn.pop();
  }
  return Number(nn.join(""));
}
