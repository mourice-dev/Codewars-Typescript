/** @format */
interface Json {
  toJson(): string;
}

class Person implements Json {
  constructor(
    private firstname: string,
    private lastname: string,
  ) {}

  toJson(): string {
    // return Json.stringify(this);
    return JSON.stringify(this);
  }
}

let person = new Person("Mucyo", "Regis");
console.log(person.toJson());
