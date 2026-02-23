/** @format */
abstract class Person {
    constructor( private firstname: string, private lastname: string) {
        
    }
    abstract getSalary() { }

    getFullname() {
        return `${this.firstname} ${this.lastname} and make ${this.getSalary}`;
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


