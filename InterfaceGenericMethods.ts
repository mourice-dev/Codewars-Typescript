/** @format */

interface collection<T>{
    add(o: T): number,
    remove(o: T): boolean
}

class list<T> implements collection<T>{
    private items: T[] = [];

    add(o: T): number {
        this.items.push(o);
        return this.items.length;
    }
    remove(o: T): boolean {
        let index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }
    getAll(): T[] {
        return this.items;
    }
}

let item = new list<number>();

for (let i = 0; i < 10; i++) {
  item.add(i);
}


console.log(item.add(1));
console.log(item.getAll())
console.log(item.remove(4));