class Control {
    state: boolean;
}

interface StatefulControl extends Control {
    enable(): void
}

class Button extends Control implements StatefulControl {
    enable() { }
}
class TextBox extends Control implements StatefulControl {
    enable() { }
}
class Label extends Control { }


// Error: cannot implement
class Chart implements StatefulControl {
    enable() { }

}