/** @format */
interface Json {
    toJSON(): string;
}

class Person implements Json{
    constructor(private firstname: string, private lastname: string) { }

toJSON(): string {
    
    return Json.stringify(this);
    }
}

let person = new Person("Mucyo", "Regis");
console.log(person.toJSON());

// interface Json {
//   toJson(): string;
// }

// class Person implements Json {
//   constructor(
//     private firstName: string,
//     private lastName: string,
//   ) {}
//   toJson(): string {
//     return JSON.stringify(this);
//   }
// }

// let person = new Person("John", "Doe");
// console.log(person.toJson());