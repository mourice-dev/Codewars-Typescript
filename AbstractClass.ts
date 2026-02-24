/** @format */
abstract class Person {
    constructor( private firstname: string, private lastname: string) {
        
    }
    abstract getSalary(): number { }

    getFullname() {
        return `${this.firstname} ${this.lastname} and make ${this.getSalary()}`;
    }
}

class Emloyee extends Person {
    constructor(firstname: string, lastname: string, private Salary: number) {
        super(firstname, lastname);
    }
    getSalary(): number {
        return this.Salary
    }
}
class EmployeFull extends Person {
    constructor(firstname: string, lastname: string, private rate: number, private time: number) {
        super(firstname, lastname);
    }
    getSalary(): number {
        return this.rate * this.time
    }
}

// const person = new EmployeFull("Nshuti", "maurice", 10, 60);
let john = new Emloyee('John', 'Doe', 12000);
let jane = new EmployeFull('Jane', 'Doe', 100, 160);

console.log(john.getFullname());
console.log(jane.getFullname());
