/** @format */
interface Person {
    name: string;
}

const person: Person = {
    name: "nshuti"
};

interface Log{
    name: string;
    numbers: number;
}

class log implements Log{
    name: string;
    numbers: number;
    constructor(name: string, numbers: number){
        this.name = name;
        this.numbers = numbers
    }
    greeting() {
        
    }
} 
