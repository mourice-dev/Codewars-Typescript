/** @format */

class Person {
  private static Headcort: number = 0;

  constructor(
    private Fname: string,
    private Lname: string,
    private jobTitle: string,
  ) {
    Person.Headcort++;
  }

  public static changes() {
    return ` ${Person.Headcort}`;
  }
}

let john = new Person("John", "Doe", "Front-end Developer");
let jane = new Person("Jane", "Doe", "Back-end Developer");
console.log(Person.changes());