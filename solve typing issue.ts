/** @format */
// Solve all the typing issues in the code without changing the implementation

// export function concatenate(strings: string[]): string {
//   return strings.join('');
// }

// concatenate(['Hello', 'Hi', 'Hola']);

export function concatenate(...strings: string[]): string {
  return strings.join("");
}

concatenate("Hello", "Hi", "Hola");
