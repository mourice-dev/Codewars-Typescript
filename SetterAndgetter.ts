/** @format */

class Person{
    age: number;
    fname: string;
    lname: string;

    constructor(age: number, fname: string, lname: string) {
        this.age = age;
        this.fname = fname;
        this.lname = lname;

    }

    get() {
        return `Age: ${this.age}`;
    }
    set(inputAge: number) {
       if (inputAge <= 0 || inputAge >= 200) {
         throw new Error("The age is invalid");
       }
       this.age = inputAge;
    }
    getFullNames() {
        return `Name: ${this.fname} ${this.lname}`;
    }
}
let person = new Person(22, "Nshuti", "Maurice");
let age = person.age = 300;
console.log(person.age);
// console.log(person.getFullNames());


// class Person {
//   private _age: number;
//   private _firstName: string;
//   private _lastName: string;

//   constructor(age: number, firstName: string, lastName: string) {
//     this._age = age;
//     this._firstName = firstName;
//     this._lastName = lastName;
//   }

//   public get age() {
//     return this._age;
//   }

//   public set age(theAge: number) {
//     if (theAge <= 0 || theAge >= 200) {
//       throw new Error("The age is invalid");
//     }
//     this._age = theAge;
//   }

//   public get firstName() {
//     return this._firstName;
//   }

//   public set firstName(theFirstName: string) {
//     if (!theFirstName) {
//       throw new Error("Invalid first name.");
//     }
//     this._firstName = theFirstName;
//   }

//   public get lastName() {
//     return this._lastName;
//   }

//   public set lastName(theLastName: string) {
//     if (!theLastName) {
//       throw new Error("Invalid last name.");
//     }
//     this._lastName = theLastName;
//   }

//   public get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   public set fullName(name: string) {
//     let parts = name.split(" ");
//     if (parts.length != 2) {
//       throw new Error("Invalid name format: first last");
//     }
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   }
// }
// let person = new Person(22, 'Jane', 'Doe');

// person.fullName = 'Jane Smith';
// console.log(person.fullName); //   "Jane Smith" 