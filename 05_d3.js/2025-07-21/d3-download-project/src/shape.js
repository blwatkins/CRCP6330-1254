class ShapeBuilder {
    #shape;
    
    constructor() {
        this.#shape = new Shape();
    }

    setX(x) {
        this.#shape.x = x;
        return this;
    }

    setY(y) {
        this.#shape.y = y;
        return this;
    }

    setWidth(width) {
        this.#shape.width = width;
        return this;
    }

    setHeight(height) {
        this.#shape.height = height;
        return this;
    }

    setColor(color) {
        this.#shape.color = color;
        return this;
    }

    build() {
        return this.#shape;
    }

    toString() {
        return 'Building ' + this.#shape.toString();
    }
}

class Shape {
    #x;
    #y;
    #width;
    #height;
    #color;

    constructor() {
    }

    set x(x) {
        this.#x = x;
    }

    set y(y) {
        this.#y = y;
    }

    set width(width) {
        this.#width = width;
    }

    set height(height) {
        this.#height = height;
    }

    set color(color) {
        this.#color = color;
    }

    toString() {
        return `Shape: x=${this.#x}, y=${this.#y}, width=${this.#width}, height=${this.#height}, color=${this.#color}`;
    }
}
