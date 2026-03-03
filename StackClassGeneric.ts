/** @format */

class Stack<T>{
    private elemets: T[] = [];
    constructor(private size: T[]) {
        this.elemets = [];
    }
    isEmpty(): boolean {
        return this.elemets.length === 0
    }
    isFull(): boolean {
        return this.elemets.length === this.size
        }
    }
    push(elemet: T): void {
        
        this.elemets.push(elemet);
    }
    pop(): T {
        return this.elemets.pop()
    }
}