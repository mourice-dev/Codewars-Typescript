/** @format */

function Person ( this: any , Firstname: any, Lastname: any ) {
  this.Firstname = Firstname;
  this.Lastname = Lastname;
};

Person.prototype.getAll = function () {
  return `${this.Firstname} ${this.Lastname}`;
};

let person = new (Person as any) ("nshuti", "maurice");
console.log(person.getAll());

// function Person(ssn, firstName, lastName) {
//     this.ssn = ssn;
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// }

// let person = new Person('171-28-0926','John','Doe');
// console.log(person.getFullName());

// function Person (Firstname, Lastname) {
//   this.Firstname = Firstname;
//   this.Lastname = Lastname;
// };

// Person.prototype.getAll = function () {
//   return `${this.Firstname} ${this.Lastname}`;
// };

// let person = new Person("nshuti", "maurice");
// console.log(person.getAll());

// function Person (Firstname, Lastname) {
//   this.Firstname = Firstname;
//   this.Lastname = Lastname;
// };

// Person.prototype.getAll = function () {
//   return `${this.Firstname} ${this.Lastname}`;
// };

// let person = new Person("nshuti", "maurice");
// console.log(person.getAll());

// function Person(this: any, Firstname: string, Lastname: string) {
//   this.Firstname = Firstname;
//   this.Lastname = Lastname;
// }

// Person.prototype.getAll = function (): string {
//   return `${this.Firstname} ${this.Lastname}`;
// };

// let person = new (Person as any)("nshuti", "maurice");
// console.log(person.getAll());

// function Person(ssn, firstName, lastName) {
//     this.ssn = ssn;
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// }

// let person = new Person('171-28-0926','John','Doe');
// console.log(person.getFullName());
