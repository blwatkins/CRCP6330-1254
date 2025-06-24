class Shape {
    #position;
    #speed;
    #dimension;
    #style;

    constructor(position, speed, dimension, style) {
        this.#position = position;
        this.#speed = speed;
        this.#dimension = dimension;
        this.#style = style;
    }

    draw() {
        this.#style.apply();
    }

    move() {}

    get position() {
        return this.#position;
    }

    get speed() {
        return this.#speed;
    }

    get dimension() {
        return this.#dimension;
    }

    get style() {
        return this.#style;
    }

    set style(s) {
        if (s instanceof Style) {
            this.#style = s;
        }
    }
}
