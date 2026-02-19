/** @format */
class Person {
    private ssn: string;     // only accessible inside the class
    public firstName: string; // accessible everywhere
    public lastName: string;  // accessible everywhere

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getSSN() {
        return  `${this.ssn}`
    }
}

const person = new Person("123-45-6789", "Maurice", "Nshuti");
console.log(person.getSSN());  
console.log(person.ssn); // this can't because ssn is private propert
console.log(person.firstName)
