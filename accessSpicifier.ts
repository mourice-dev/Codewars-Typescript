/** @format */
// Public
// class Animal {
//   public name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
// }
// const p = new Animal("dog");
// console.log(p.name);

//Private

// class Animal {
//   private name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
//   greeting(name: string) {
//     console.log(name);
//   }
// }
// const p = new Animal("dog");
// console.log(p.name); // can't work because it outside of our class

// Protect
class Animals {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}
    class Animal extends Animals{
        numbers: number;

       constructor (numbers: number, name: string) {
           super(name)
            this.numbers = numbers;
        }

        greeting() {
            console.log()
        }
    }

const p = new Animals("dog"); // we can't access Animals propeter on outside of class because they are protect
console.log(p.name);