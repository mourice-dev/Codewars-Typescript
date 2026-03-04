/** @format */
interface item<T>{
    [name: string] : T
}

let list: item<boolean> = {
    "disable": true
}