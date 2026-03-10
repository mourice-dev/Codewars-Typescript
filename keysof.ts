/** @format */
interface Person {
  name: string;
  age: number;
}

// PersonKeys is a union type: "name" | "age"
type PersonKeys = keyof Person;

function printPersonProperty(person: Person, property: PersonKeys) {
  console.log(`Printing person property ${property}: "${person[property]}"`);
}

let person = { name: "Max", age: 27 };
printPersonProperty(person, "name"); // Output: Printing person property name: "Max"
printPersonProperty(person, "age");  // Output: Printing person property age: "27"

// Error: Type '"address"' is not assignable to type '"name" | "age"'
// printPersonProperty(person, "address"); 
