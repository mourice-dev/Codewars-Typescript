// /** @format */

// class Person {
//   Finame: string;
//   Laname: string;

//   constructor(Finame: string, Laname: string) {
//     this.Finame = Finame;
//     this.Laname = Laname;
//   }
//   getFullName(): string {
//     return `${this.Finame} ${this.Laname}`;
//   }
// }
// const person = new Person("Nshuti", "Maurice");
// console.log(person.getFullName());

class Person {
  ssn: string;
  firstName: string;
  lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
let person = new Person("171-28-0926", "John", "Doe");
console.log(person.getFullName());