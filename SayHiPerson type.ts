// Write a function sayHi which will take a Person record as input and will return a string:

// "Hi, i'am {firstName} {lastName} and it is nice to meet You."

// You will need to define the record type Person, with fields firstName and lastName.

// module PersonSaysHi where

// data Person = Person { firstName :: String, lastName :: String }

// sayHi :: Person -> String
// sayHi p = "Hi"
// module PersonSaysHi where
type Person = {
    firstName: string,
    lastName: string
};  
const person: Person = {
    firstName: "nshuti",
    lastName:  "maurice"
};
// sayHi :: Person -> String
// sayHi p = "Hi"


function sayHi(person : Person){
    return `Hi, i'am ${person.firstName} ${person.lastName} and it is nice to meet You.`;
}
console.log(sayHi(person));