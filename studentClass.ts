/** @format */

class Student {
    id: number;
    name: string;
    age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    getStudentInfo(): string {
        return `ID:${this.id} Name:${this.name} Age:${this.age}`
    }
}
const student = new Student(1, "Nshuti Maurice", 22);
console.log(student.getStudentInfo());