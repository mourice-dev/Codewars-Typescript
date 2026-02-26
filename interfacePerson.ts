/** @format */
interface Person {
  firstname: string;
  middlename?: string;
  lastname: string;
};

function getFullname(person: Person) {
    if (person.middlename) {
        return `${person.firstname} ${person.middlename} ${person.lastname}`;
    }
    // return `${firstname} ${lastname}`;

    return `${person.firstname} ${person.lastname}`;
}

let jane = {
  firstname: 'Jane',
  middlename: 'K.',
  lastname: 'Doe',
  age: 22,
};

// const john = {
//     firstname: "nshuti",
//     lastname: "maurice"
// }
// console.log(getFullname(jane))
let fullName = getFullname(jane);
console.log(fullName); // Jane Doe
