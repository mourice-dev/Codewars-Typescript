/** @format */
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

export function findShort(s: string): number {
  const nums = s.split(" ").map((c) => c.length);
  return Math.min(...nums);
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));