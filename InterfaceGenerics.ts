/** @format */

interface Pair<K, V> {
    key: K,
    value: V 
}

let month: Pair<string, number> = {
    key: "june",
    value: 8
}
console.log(month)