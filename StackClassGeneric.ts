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
}