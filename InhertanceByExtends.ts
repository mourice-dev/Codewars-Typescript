/** @format */

// class Person {
//   constructor(private Fname: string, private Lname: string) {}
//   getFullname() {
//     return `${this.Fname} ${this.Lname}`;
//   }

//   describe(): string {
//     return `This is ${this.Fname} ${this.Lname}.`;
//   }
// }
// class Employee extends Person {
//     constructor(Fname: string, Lname: string, private Salary: number) {
//         super(Fname, Lname);
//   }
// }

// const employee = new Employee('nshuti', 'maurice', 2000);
// console.log(employee.getFullname());

class Person {
    Fname: string;
    Lname: string;
     
    constructor(Fname: string, Lname: string,) {
       this.Fname = Fname;
        this.Lname = Lname
    }
    
  getFullname() {
    return `${this.Fname} ${this.Lname}`;
  }

  describe(): string {
    return `This is ${this.Fname} ${this.Lname}  `;
  }
}
class Employee extends Person {
    
    Salary: number
    
  constructor( Fname: string, Lname: string, Salary: number ) {
      super(Fname, Lname);
      this.Salary = Salary;
    }
    describe(): string {
        return super.describe() + `My salary: ${this.Salary}`;
    }
}

const employee = new Employee("nshuti", "maurice", 2000);
console.log(employee.describe());