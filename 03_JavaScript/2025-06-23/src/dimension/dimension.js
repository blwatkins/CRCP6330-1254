class Dimension {
    #width;
    #height;

    constructor(width, height) {
        if (this.#isValidNumber(width)) {
            this.#width = width;
        } else {
            this.#width = 1;
        }

        if (this.#isValidNumber(height)) {
            this.#height = height;
        } else {
            this.#height = width;
        }
    }

    get width() {
        return this.#width;
    }

    get height() {
        return this.#height;
    }

    #isValidNumber(value) {
        return (typeof value === 'number') && (value > 0);
    }
}
