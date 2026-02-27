class Person {
  public state(): void;
}

interface peoples extends Person{
    state () : void  // mr
}

class Student extends Person implements peoples {
    state(): void {} // method 
}

class teachers implements peoples {
  state(): void {} // method
}


// class Control {
//     private state: boolean;
// }

// interface StatefulControl extends Control {
//     enable(): void
// }

// class Button extends Control implements StatefulControl {
//     enable() { }
// }
// class TextBox extends Control implements StatefulControl {
//     enable() { }
// }
// class Label extends Control { }


// // Error: cannot implement
// class Chart implements StatefulControl {
//     enable() { }

// }