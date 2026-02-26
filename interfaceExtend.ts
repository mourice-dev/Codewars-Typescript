/** @format */
interface Mailable {
  send(email: string): boolean;
  queue(email: string): boolean
}
interface FutureMailable extends Mailable {
    later( email: string, after: number) : boolean
}

interface A {
  a(): void;
}

interface B extends A {
  b(): void;
}



// class FutureMailable extends Mailable{
//     send() {
        
//     }
// }