/** @format */

let Person = (Firstname: string, Lastname : string){
    this.Firstname = Firstname,
    this.Lastname = Lastname

}
Person.prototype.getAll  = function () : string {
    return `${Person.Firstname} ${Person.Lastname}`
}
let person = new Person("nshuti", "maurice");
console.log(person.getAll())


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