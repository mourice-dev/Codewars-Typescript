// /** @format */
// interface Mailable {
//   send(email: string): boolean;
//   queue(email: string): boolean
// }
// interface FutureMailable extends Mailable {
//     later( email: string, after: number) : boolean
// }

// // interface A {
// //   a(): void;
// // }

// // interface B extends A {
// //   b(): void;
// // }



// class Mail implements FutureMailable {
//   later(email: string, after: number): boolean {
//     console.log(`Send email to  ${email} in ${after}ms`);
//     return true;
//   }
 
//   send(email: string): boolean {
//     console.log(`Send email to  ${email} in ${after}ms`);

//     return true;
//   }

//   queue(email: string): boolean {
//     console.log(`Queue an email to ${email}`);

//     return true;
//   }
// }


interface Mailable {
  send(email: string): boolean;
  queue(email: string): boolean;
}

interface FutureMailable extends Mailable {
  later(email: string, after: number): boolean;
}

class Mail implements FutureMailable {
  later(email: string, after: number): boolean {
    console.log(`Send email to ${email} in ${after} ms.`);
    return true;
  }
  send(email: string): boolean {
    console.log(`Sent email to ${email} after ${after} ms. `);
    return true;
  }
  queue(email: string): boolean {
    console.log(`Queue an email to ${email}.`);
    return true;
  }
}