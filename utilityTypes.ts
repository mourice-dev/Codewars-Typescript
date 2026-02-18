/** @format */
// Partial: make all properities option
interface Partials {
    name: string,
    id: number
} 
let partials: Partial<Partials> = {
    id: 1
}

// Required: require all properties

interface requires {
    name: string,
    id: number
}

let require: Required<requires> = {
    name: "nshuti",
    id: 1 // you must include all properties
}

// Readonly: can't be changed
interface readon {
    name: string
}
let readOn: Readonly<readon> = {
    name: "snhuti"
}
// readOn.name = "nshuti" // this can't be work because property it's readonly utility type
// Pick: choose one or more in group of properties 
interface picks {
    id: number,
    name: string,
    email: string
}
let pickss: Pick<picks, "id"> = {
    id: 1
}
// Omit: this is for remove some properties
interface omits {
    id: number,
    name: string
}
let omtss: Omit<omits, "id"> = {
    name: "nshuti"
}
// Record: this create object type with specific keys and value
// interface records { 
//     id: number
// }
type recordss = Record<string, number>;

let recordsss: recordss = {
    age: 21,
    amount: 200
}