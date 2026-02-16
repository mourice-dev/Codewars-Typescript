/** @format */

// type Alphanumeric = string & number; // never
// console.log(Alphanumeric)

// function raiseError(message: string): never {
//     throw new Error(message);
// }

// type Role = 'admin' | 'user';

// const authorize = (role: Role): string => {
//   switch (role) {
//     case 'admin':
//       return 'You can do anything';
//     case 'user':
//       return 'You can do something';
//     default:
//       // never reach here util we add a new role
//       const _unreachable: never = role;
//       throw new Error(`Invalid role: ${_unreachable}`);
//   }
// };



// type Role = 'admin' | 'user' | 'guest';

// const authorize = (role: Role): string => {
//   switch (role) {
//     case 'admin':
//       return 'You can do anything';
//     case 'user':
//       return 'You can do something';
//     case 'guest':
//       return 'You can do nothing';
//     default:
//       // never reach here util we add a new role
//       const _unreachable: never = role;
//       throw new Error(`Invalid role: ${_unreachable}`);
//   }
// };
type Role = 'admin' | 'user' | 'guest';

const unknownRole = (role: never): never => {
  throw new Error(`Invalid role: ${role}`);
};

const authorize = (role: Role): string => {
  switch (role) {
    case 'admin':
      return 'You can do anything';
    case 'user':
      return 'You can do something';
    case 'guest':
      return 'You can do nothing';
    default:
      // never reach here util we add a new role
      return unknownRole(role);
  }
};

console.log(authorize('admin'));


type Shape = "square" | "circle";

function shapeHandle(shape: Shape) {
    if (shape === "square") {
        console.log("square");
    }
     else if (shape === "circle") {
       console.log("circle");
    }
    else {
      const  shapeHandles: never = shape;
        
    }
}
