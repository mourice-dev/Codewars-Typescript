/** @format */
interface Person {
    firstname: string,
    lastname: string
};

function getFullname(person: Person) {
    // if (person.middlename) {
    //     return `${person.firstname} ${person.middlename} ${person.lastname}`;
    // }
    return `${person.firstname} ${person.lastname}`;
}

const john = {
    firstname: "nshuti",
    lastname: "maurice"
}

console.log(getFullname(john))