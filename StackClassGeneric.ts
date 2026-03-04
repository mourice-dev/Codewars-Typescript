/** @format */

class Stack<T>{
    private elements: T[] = [];

    constructor(private size: number) {
      
    }
    isEmpty(): boolean {
        return this.elements.length === 0;
    }
    isFull(): boolean {
        return this.elements.length === this.size;
    }
    push(element: T): void {
        this.elements.push(element);
    }
    pop(): T {
        if (this.elements.length === 0) {
            throw Error("this stack it's empty");
        } else {
            return this.elements.pop() as T;
        }
    }
    getAll() {
        return this.elements
    }
}

let numbers = new Stack<number>(5);

function getRandom(H: number, L: number): number {
    return Math.floor(Math.random() * (H - L + 1) + L);
}

while (!numbers.isFull()) {
    let n = getRandom(1, 8);
    numbers.push(n)
}
console.log(numbers.getAll());


while (!numbers.isEmpty()) {
    let n = numbers.pop();
    
}

