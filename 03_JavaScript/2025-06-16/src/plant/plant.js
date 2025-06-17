// abstract classes
  // class that we CANNOT instantiate
// concrete classes
  // class that we can instantiate

class Dimension {
    #width;
    #height;

    constructor(width, height) {
        this.#width = width;
        this.#height = height;
    }

    get width() {
        return this.#width;
    }

    get height() {
        return this.#height;
    }
}

class Plant {
    #position;
    #style;
    #dimension;

    constructor(position, dimension, style) {
        this.#position = position;
        this.#dimension = dimension;
        this.#style = style;
    }

    get position() {
        return this.#position;
    }

    get dimension() {
        return this.#dimension;
    }

    get style() {
        return this.#style;
    }
}
